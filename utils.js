// Persona definitions with avatar URLs
const personas = {
    emma_fashion: {
        name: "Emma Chen",
        type: "Fashion Enthusiast", 
        emoji: "👗",
        avatar: "image/jane-doe.webp",
        avatarSmall: "image/jane-doe.webp",
        description: "Trend-conscious millennial who loves new fashion brands and accessories."
    },
    michael_tech: {
        name: "Michael Rodriguez",
        type: "Tech Professional",
        emoji: "💻", 
        avatar: "image/david-lee.webp",
        avatarSmall: "image/david-lee.webp",
        description: "Software engineer passionate about gadgets and smart devices."
    },
    sarah_family: {
        name: "Sarah Johnson", 
        type: "Busy Mom",
        emoji: "👩‍👧‍👦",
        avatar: "image/emily-turner.webp",
        avatarSmall: "image/emily-turner.webp",
        description: "Working mother focused on family needs and children's essentials."
    },
    david_foodie: {
        name: "David Kim",
        type: "Foodie & Coffee Lover", 
        emoji: "☕",
        avatar: "image/michael-brown.webp",
        avatarSmall: "image/michael-brown.webp",
        description: "Food enthusiast who enjoys gourmet experiences and specialty coffee."
    },
    lisa_wellness: {
        name: "Lisa Thompson",
        type: "Wellness Focused",
        emoji: "🧘‍♀️", 
        avatar: "image/sarah-martinez.webp",
        avatarSmall: "image/sarah-martinez.webp",
        description: "Health-conscious professional interested in fitness and wellness."
    }
};

// Comprehensive notification data - uniformly distributed across 1-60 shops
const notificationData = {
    emma_fashion: {
        "1": { message: "Welcome! Fashion showcase area 🌟", reason: "Emma loves fashion displays and new collections", detailedReason: "This entrance features rotating fashion displays and trend previews that align with Emma's interest in staying current with the latest styles.", importance: 85 },
        "7": { message: "Personal styling consultation available", reason: "Emma values professional fashion advice", detailedReason: "Expert stylists can help Emma create Instagram-worthy outfits and discover new brands that match her aesthetic preferences.", importance: 89 },
        "11": { message: "New summer collection arrived!", reason: "Emma follows seasonal fashion trends", detailedReason: "Latest summer pieces include sustainable fabrics and bold patterns that Emma would love to feature in her social media posts.", importance: 95 },
        "16": { message: "Designer outfits 30% off today!", reason: "Emma loves designer fashion at great prices", detailedReason: "Premium designer pieces are now accessible at Emma's budget, perfect for her collection of statement pieces and wardrobe investment.", importance: 92 },
        "19": { message: "Luxury handbag pre-order open", reason: "Emma collects premium accessories", detailedReason: "Exclusive handbag collection launching next season - Emma can secure limited pieces that will become coveted fashion statements.", importance: 94 },
        "25": { message: "Athleisure fashion trends 2024", reason: "Emma likes trendy activewear styles", detailedReason: "The intersection of fitness and fashion appeals to Emma's lifestyle, offering versatile pieces for gym-to-street styling.", importance: 87 },
        "32": { message: "Fashion tech wearables demo", reason: "Emma likes tech-fashion fusion trends", detailedReason: "Smart jewelry and wearable tech that complement Emma's outfits while tracking fitness and style metrics.", importance: 86 },
        "42": { message: "Home fashion and decor styling", reason: "Emma's style extends to home aesthetics", detailedReason: "Interior design trends that mirror fashion cycles, helping Emma create an Instagram-worthy living space.", importance: 84 },
        "48": { message: "Cozy fashion for home comfort", reason: "Emma loves comfortable yet stylish pieces", detailedReason: "Loungewear and home fashion that maintains Emma's aesthetic standards while prioritizing comfort.", importance: 83 },
        "55": { message: "Fashion dining experience tonight", reason: "Emma enjoys stylish social experiences", detailedReason: "Themed dining experience where fashion and food intersect, perfect for Emma's social media content.", importance: 88 }
    },
    michael_tech: {
        "3": { message: "Tech support consultation free", reason: "Michael values professional tech assistance", detailedReason: "Expert troubleshooting and optimization services for Michael's complex tech setup and professional development needs.", importance: 86 },
        "9": { message: "Smart restroom IoT demo", reason: "Michael loves innovative IoT applications", detailedReason: "Cutting-edge sensor technology and automated systems showcase practical IoT implementations for Michael's projects.", importance: 84 },
        "17": { message: "Wearable tech fashion integration", reason: "Michael appreciates tech-fashion fusion", detailedReason: "Smart clothing and accessories that blend technology with professional appearance, ideal for Michael's corporate environment.", importance: 87 },
        "24": { message: "Smart gym equipment demo", reason: "Michael appreciates technology in fitness", detailedReason: "AI-powered workout equipment and fitness tracking systems that appeal to Michael's analytical approach to health.", importance: 89 },
        "31": { message: "Latest gaming laptops in stock!", reason: "Michael loves high-performance gaming setups", detailedReason: "Top-tier gaming systems with latest GPUs and processors, perfect for Michael's gaming hobby and development work.", importance: 96 },
        "36": { message: "AI computer setup consultation", reason: "Michael needs professional development tools", detailedReason: "Custom AI development workstation configuration with optimal hardware for machine learning projects and software engineering.", importance: 94 },
        "37": { message: "VR gaming tournament signup open", reason: "Michael enjoys competitive gaming events", detailedReason: "Professional VR gaming competition with prizes and networking opportunities in the tech gaming community.", importance: 92 },
        "43": { message: "Smart furniture tech integration", reason: "Michael likes connected home solutions", detailedReason: "Furniture with built-in charging, automation controls, and ergonomic features designed for tech professionals.", importance: 88 },
        "52": { message: "Tech-enabled dining experience", reason: "Michael appreciates technological innovation", detailedReason: "Restaurant using AI ordering, smart table technology, and augmented reality menus demonstrating practical tech applications.", importance: 85 },
        "59": { message: "Smart kitchen appliances demo", reason: "Michael loves automated home solutions", detailedReason: "IoT kitchen systems with app control, inventory tracking, and automated cooking features that streamline daily routine.", importance: 90 }
    },
    sarah_family: {
        "2": { message: "Family photo packages available", reason: "Sarah treasures family memory creation", detailedReason: "Professional family portrait sessions with child-friendly photographers who specialize in capturing natural family moments.", importance: 87 },
        "6": { message: "Priority family customer service", reason: "Sarah values time-efficient service", detailedReason: "Dedicated family service lane with shorter wait times and staff trained to assist families with children.", importance: 89 },
        "10": { message: "Baby care essentials 25% off", reason: "Sarah manages infant and toddler needs", detailedReason: "Comprehensive baby supplies including organic options, safety-tested products, and bulk purchasing discounts.", importance: 94 },
        "14": { message: "Kids' fashion back-to-school sale", reason: "Sarah shops for children's clothing", detailedReason: "Durable, comfortable children's clothing designed for active play and school requirements with easy-care fabrics.", importance: 91 },
        "20": { message: "Family fashion coordination service", reason: "Sarah coordinates family appearances", detailedReason: "Styling service that helps coordinate family outfits for photos and events while respecting everyone's preferences.", importance: 86 },
        "26": { message: "Family outdoor activity packages", reason: "Sarah plans enriching family experiences", detailedReason: "Complete outdoor gear packages for family adventures, camping trips, and weekend activities that create lasting memories.", importance: 88 },
        "35": { message: "Kid-safe mobile devices available", reason: "Sarah considers family technology needs", detailedReason: "Parental-controlled devices with educational apps and safety features designed for children's developmental needs.", importance: 85 },
        "44": { message: "Child-friendly home decor solutions", reason: "Sarah creates safe family environments", detailedReason: "Durable, safe home decor that withstands family life while maintaining style, including washable fabrics.", importance: 84 },
        "51": { message: "Kids eat free weekends promotion!", reason: "Sarah seeks family dining value", detailedReason: "Family-friendly restaurants with nutritious kids' menus, play areas, and weekend promotions that make dining affordable.", importance: 92 },
        "60": { message: "Family grocery bulk discounts", reason: "Sarah manages household shopping efficiently", detailedReason: "Bulk purchasing options for family staples with storage solutions and meal planning assistance for busy schedules.", importance: 90 }
    },
    david_foodie: {
        "4": { message: "Gourmet food directory available", reason: "David researches quality dining options", detailedReason: "Comprehensive guide to mall's culinary offerings including chef backgrounds, ingredient sourcing, and signature dishes.", importance: 86 },
        "12": { message: "Culinary apparel and tools sale", reason: "David appreciates quality cooking equipment", detailedReason: "Professional-grade kitchen tools and chef-quality apparel for David's home cooking adventures and culinary experimentation.", importance: 84 },
        "22": { message: "Sports nutrition and gourmet fusion", reason: "David balances fitness with culinary passion", detailedReason: "High-quality athletic nutrition products that don't compromise on taste, perfect for David's active lifestyle.", importance: 87 },
        "29": { message: "Winter comfort food specialties", reason: "David enjoys seasonal culinary experiences", detailedReason: "Seasonal menu featuring comfort foods made with premium ingredients and traditional techniques that warm the soul.", importance: 88 },
        "38": { message: "Food technology innovations showcase", reason: "David interests in culinary technology", detailedReason: "Latest kitchen gadgets, molecular gastronomy tools, and food preparation technology that enhance cooking capabilities.", importance: 89 },
        "46": { message: "Gourmet kitchen comfort setup", reason: "David values premium cooking environments", detailedReason: "Kitchen design consultation focusing on comfort, efficiency, and gourmet cooking capabilities for food enthusiasts.", importance: 90 },
        "53": { message: "Artisan coffee roasting demonstration!", reason: "David passionate about coffee craftsmanship", detailedReason: "Live coffee roasting with tasting notes, origin stories, and brewing technique workshops led by master roasters.", importance: 96 },
        "56": { message: "Wine & gourmet pairing event tonight", reason: "David loves sophisticated dining experiences", detailedReason: "Sommelier-led wine and food pairing featuring local vintages and artisanal cheese selections from renowned producers.", importance: 94 },
        "58": { message: "Farm-to-table quick service launched", reason: "David values fresh, quality ingredients", detailedReason: "Fast-casual concept featuring locally-sourced ingredients prepared fresh with transparent sourcing information.", importance: 92 },
        "60": { message: "International gourmet grocery section", reason: "David cooks with premium global ingredients", detailedReason: "Specialty international ingredients, rare spices, and artisanal products for authentic global cuisine recreation.", importance: 91 }
    },
    lisa_wellness: {
        "5": { message: "Wellness information center open", reason: "Lisa seeks comprehensive health guidance", detailedReason: "Holistic health resources including nutrition counseling, fitness planning, and mental wellness support from certified professionals.", importance: 88 },
        "8": { message: "Free comprehensive health screening", reason: "Lisa prioritizes preventive healthcare", detailedReason: "Complete health assessment including vitals, body composition, and wellness consultation for proactive health management.", importance: 94 },
        "13": { message: "Wellness-focused styling consultation", reason: "Lisa integrates wellness into appearance", detailedReason: "Styling advice prioritizing comfort, natural fabrics, and clothing that supports active lifestyle and wellness image.", importance: 86 },
        "21": { message: "New yoga and pilates classes!", reason: "Lisa loves mind-body fitness practices", detailedReason: "Comprehensive mind-body fitness program with certified instructors focusing on flexibility, strength, and mental clarity.", importance: 95 },
        "23": { message: "Organic supplements consultation available", reason: "Lisa prefers natural health solutions", detailedReason: "Personalized supplement recommendations based on lifestyle, dietary needs, and wellness goals using organic products.", importance: 92 },
        "27": { message: "Team wellness challenges starting", reason: "Lisa enjoys community-based fitness", detailedReason: "Group wellness programs that combine fitness goals with social support, perfect for community-oriented wellness approach.", importance: 89 },
        "34": { message: "Health tracking smart devices", reason: "Lisa monitors wellness metrics comprehensively", detailedReason: "Advanced health monitoring technology tracking sleep, stress, nutrition, and fitness with detailed analytics.", importance: 90 },
        "41": { message: "Organic garden starter kits", reason: "Lisa grows her own healthy food", detailedReason: "Complete organic gardening setup with heirloom seeds, natural fertilizers, and growing guides for fresh nutrition.", importance: 87 },
        "47": { message: "Wellness-focused home design consultation", reason: "Lisa creates healthy living environments", detailedReason: "Home design principles promoting wellness through natural lighting, air quality, and meditation spaces.", importance: 85 },
        "57": { message: "Healthy snack alternatives guide", reason: "Lisa chooses nutritious food options", detailedReason: "Comprehensive guide to healthy snacking with recipes, portion control tips, and nutrient-dense alternatives.", importance: 91 }
    }
};

// Utility functions
function updateTooltipPosition(e) {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.left = (e.pageX + 10) + 'px';
    tooltip.style.top = (e.pageY - 30) + 'px';
}

function getPathElement(floorId) {
    return document.getElementById(`path-${floorId}`);
}

function getPathPointAtLength(pathElement, length) {
    const totalLength = pathElement.getTotalLength();
    const clampedLength = Math.max(0, Math.min(length, totalLength));
    return pathElement.getPointAtLength(clampedLength);
}

function findClosestPointOnPath(pathElement, x, y) {
    const pathLength = pathElement.getTotalLength();
    let closestDistance = Infinity;
    let closestPathLength = null;
    
    for (let i = 0; i <= pathLength; i += 5) {
        const point = pathElement.getPointAtLength(i);
        const distance = Math.sqrt(Math.pow(point.x - x, 2) + Math.pow(point.y - y, 2));
        
        if (distance < closestDistance) {
            closestDistance = distance;
            closestPathLength = i;
        }
    }
    
    return closestDistance < 1000 ? closestPathLength : null;
}

function findNearestShops(floorId, count = 3) {
    const shopperPos = currentPositions[floorId];
    if (!shopperPos) return [];
    
    const svg = document.querySelector(`[data-floor="${floorId}"]`);
    const shops = svg.querySelectorAll('.shop');
    const distances = [];
    
    shops.forEach(shop => {
        const rect = shop.getBBox();
        const shopX = rect.x + rect.width / 2;
        const shopY = rect.y + rect.height / 2;
        
        const distance = Math.sqrt(
            Math.pow(shopperPos.x - shopX, 2) + 
            Math.pow(shopperPos.y - shopY, 2)
        );
        
        distances.push({
            shop: shop.dataset.name,
            shopNumber: shop.dataset.shop,
            distance: distance,
            element: shop
        });
    });
    
    return distances
        .sort((a, b) => a.distance - b.distance)
        .slice(0, count);
}