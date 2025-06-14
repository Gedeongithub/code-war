function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    switch (rating) {
        case 'terrible': return Math.ceil(amount * 0);
        case 'poor': return Math.ceil(amount * 0.05);
        case 'good': return Math.ceil(amount * 0.10);
        case 'great': return Math.ceil(amount * 0.15);
        case 'excellent': return Math.ceil(amount * 0.20);
        default: return 'Rating not recognised';
    }
}
​