let shoppers = {};
let isMoving = {};
let targetPositions = {};
let currentPositions = {};
let pathLengths = {};
let nearestShopsInterval;
let currentPersona = 'emma_fashion';
let currentJourneyNotifications = [];
let hasStartedNewJourney = false;
let walkSpeed = 40;

document.addEventListener('DOMContentLoaded', function() {
    initializeSpeedControl();
    initializeFloorPlans();
    startNearestShopsLogging();
    updatePersonaDisplay();
    document.getElementById('personaSelect').addEventListener('change', function(e) {
        currentPersona = e.target.value;
        updatePersonaDisplay();
        updateShopperAvatar();
        clearNotifications();
    });
});

function initializeSpeedControl() {
    const speedSlider = document.getElementById('speedSlider');
    const speedValue = document.getElementById('speedValue');
    if (!speedSlider || !speedValue) {
        console.error('Speed control elements not found');
        return;
    }
    speedSlider.addEventListener('input', function(e) {
        walkSpeed = parseInt(e.target.value);
        speedValue.textContent = walkSpeed + 's';
    });
    speedValue.textContent = walkSpeed + 's';
    speedSlider.value = walkSpeed;
}

function initializeFloorPlans() {
    const svgs = document.querySelectorAll('.mall-svg');
    svgs.forEach(svg => {
        const floorId = svg.dataset.floor;
        const shopper = svg.querySelector('.shopper-icon');
        const pathElement = getPathElement(floorId);
        shoppers[floorId] = shopper;
        isMoving[floorId] = false;
        const startPoint = getPathPointAtLength(pathElement, 0);
        currentPositions[floorId] = { x: startPoint.x, y: startPoint.y, pathLength: 0 };
        pathLengths[floorId] = pathElement.getTotalLength();
        addShopEventListeners(svg);
        addPathClickListener(svg, floorId, pathElement);
    });
    updateShopperAvatar();
}

function updateShopperAvatar() {
    const persona = personas[currentPersona];
    const shopperImage = document.getElementById('shopperImage');
    if (shopperImage && persona) {
        shopperImage.setAttribute('href', persona.avatar);
    } else {
        console.error('Shopper image element or persona not found');
    }
}

function addShopEventListeners(svg) {
    const shops = svg.querySelectorAll('.shop');
    const tooltip = document.getElementById('tooltip');
    shops.forEach(shop => {
        shop.addEventListener('mouseenter', function(e) {
            const shopNum = this.dataset.shop;
            const shopName = this.dataset.name;
            this.style.strokeWidth = '3';
            this.style.stroke = '#000';
            tooltip.innerHTML = `${shopNum} – ${shopName}`;
            tooltip.style.display = 'block';
            updateTooltipPosition(e);
        });
        shop.addEventListener('mouseleave', function() {
            this.style.strokeWidth = '';
            this.style.stroke = '';
            tooltip.style.display = 'none';
        });
        shop.addEventListener('mousemove', updateTooltipPosition);
    });
}

function addPathClickListener(svg, floorId, pathElement) {
    svg.addEventListener('click', function(e) {
        const rect = svg.getBoundingClientRect();
        const svgX = (e.clientX - rect.left) * (svg.viewBox.baseVal.width / rect.width);
        const svgY = (e.clientY - rect.top) * (svg.viewBox.baseVal.height / rect.height);
        const targetPathLength = findClosestPointOnPath(pathElement, svgX, svgY);
        if (targetPathLength !== null) {
            clearNotifications();
            hasStartedNewJourney = true;
            moveShopperToPosition(floorId, pathElement, targetPathLength);
        }
    });
}

function moveShopperToPosition(floorId, pathElement, targetPathLength) {
    if (isMoving[floorId]) return;
    isMoving[floorId] = true;
    targetPositions[floorId] = targetPathLength;
    animateShopperMovement(floorId, pathElement);
}

function animateShopperMovement(floorId, pathElement) {
    const shopper = shoppers[floorId];
    const current = currentPositions[floorId];
    const target = targetPositions[floorId];
    const totalPathLength = pathLengths[floorId];
    const distance = Math.abs(target - current.pathLength);
    const timeToTarget = (distance / totalPathLength) * walkSpeed * 1000;
    const frameRate = 60;
    const totalFrames = Math.max(1, Math.floor(timeToTarget / (1000 / frameRate)));
    const speedPerFrame = distance / totalFrames;
    let currentFrame = 0;
    const direction = target > current.pathLength ? 1 : -1;
    function animate() {
        if (!isMoving[floorId] || currentFrame >= totalFrames) {
            current.pathLength = target;
            isMoving[floorId] = false;
            return;
        }
        current.pathLength += speedPerFrame * direction;
        currentFrame++;
        const point = getPathPointAtLength(pathElement, current.pathLength);
        current.x = point.x;
        current.y = point.y;
        shopper.setAttribute('cx', point.x);
        shopper.setAttribute('cy', point.y);
        if (isMoving[floorId]) {  requestAnimationFrame(animate);  }
    }
    animate();
}

function startNearestShopsLogging() {
    nearestShopsInterval = setInterval(() => {
        Object.keys(currentPositions).forEach(floorId => {
            const nearestShops = findNearestShops(floorId, 3);
            updateRightPanel(nearestShops, floorId);
            if (hasStartedNewJourney) {  checkForNotifications(nearestShops, floorId); }
        });
    }, 200);
}

function updateRightPanel(nearestShops, floorId) {
    const currentShopInfo = document.getElementById('currentShopInfo');
    if (nearestShops.length > 0) {
        const closest = nearestShops[0];
        currentShopInfo.innerHTML = `<strong>${closest.shopNumber} - ${closest.shop}</strong><br><small>Distance: ${closest.distance.toFixed(0)}px</small>`;
        document.querySelectorAll('.shop').forEach(shop => shop.classList.remove('shop-highlight'));
        closest.element.classList.add('shop-highlight');
    }
    const nearbyShopsInfo = document.getElementById('nearbyShopsInfo');
    if (nearestShops.length > 1) {
        const nearby = nearestShops.slice(1).map(shop => 
            `<div class="small">${shop.shopNumber} - ${shop.shop} (${shop.distance.toFixed(0)}px)</div>`
        ).join('');
        nearbyShopsInfo.innerHTML = nearby;
    }
}

function checkForNotifications(nearestShops, floorId) {
    nearestShops.forEach(shop => {
        const shopId = shop.shopNumber;
        const personaNotifications = notificationData[currentPersona];
        if (personaNotifications && personaNotifications[shopId]) {
            const exists = currentJourneyNotifications.some(n => n.shopId === shopId);
            if (!exists) {
                const notification = {
                    ...personaNotifications[shopId],
                    shopName: shop.shop,
                    shopId: shopId,
                    timestamp: Date.now()
                };
                currentJourneyNotifications.push(notification);
                addNotificationToPanel(notification);
            }
        }
    });
}

function addNotificationToPanel(notification) {
    const panel = document.getElementById('notifications-panel');
    const persona = personas[currentPersona];
    let borderColor = 'border-success';
    if (notification.importance >= 90) borderColor = 'border-danger';
    else if (notification.importance >= 85) borderColor = 'border-warning';
    const notificationCard = document.createElement('div');
    notificationCard.className = `card mb-2 notification-card ${borderColor} border-start border-3`;
    notificationCard.innerHTML = `
        <div class="card-body p-2">
            <div class="d-flex justify-content-between align-items-start mb-1">
                <div class="d-flex align-items-center">
                    <img src="${persona.avatarSmall}" alt="${persona.name}" class="rounded-circle me-2" style="width: 20px; height: 20px;">
                    <h6 class="card-title small text-primary mb-0">Shop #${notification.shopId} - ${notification.shopName}</h6>
                </div>
                <span class="badge bg-primary small">${notification.importance}</span>
            </div>
            <p class="card-text small mb-1">${notification.message}</p>
            <div class="small text-muted fst-italic">
                <strong>Why this appeared:</strong><br>
                ${notification.detailedReason}
            </div>
        </div>
    `;
    panel.appendChild(notificationCard);
    panel.scrollTop = panel.scrollHeight;
}

function clearNotifications() {
    currentJourneyNotifications = [];
    const panel = document.getElementById('notifications-panel');
    const persona = personas[currentPersona];
    panel.innerHTML = `
        <div class="text-center text-muted p-2">
            <i class="fas fa-route fa-lg mb-1"></i>
            <div class="small">Start walking to receive notifications for ${persona.name}</div>
        </div>
    `;
}

function updatePersonaDisplay() {
    const persona = personas[currentPersona];
    if (!persona) {
        console.error('Persona not found:', currentPersona);
        return;
    }
    const personaEmojiElement = document.getElementById('personaEmoji');
    if (personaEmojiElement) {
        personaEmojiElement.textContent = persona.emoji;
    }
    const personaNameElement = document.getElementById('personaName');
    const personaTypeElement = document.getElementById('personaType');
    const personaDescElement = document.getElementById('personaDescription');
    const personaAvatarElement = document.getElementById('personaAvatar');
    if (personaNameElement) personaNameElement.textContent = persona.name;
    if (personaTypeElement) personaTypeElement.textContent = persona.type;
    if (personaDescElement) personaDescElement.textContent = persona.description;
    if (personaAvatarElement) {
        personaAvatarElement.src = persona.avatarSmall;
        personaAvatarElement.alt = persona.name;
    }
    
    if (currentJourneyNotifications.length === 0) {  clearNotifications();  }
}