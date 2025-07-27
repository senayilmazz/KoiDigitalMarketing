// Testimonials Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize testimonials functionality
    initTestimonials();
    
    // Initialize video testimonial interactions
    initVideoTestimonials();
    
    // Initialize rating displays
    initRatingDisplays();
});

function initTestimonials() {
    // Add hover effects to testimonial cards
    const testimonialCards = document.querySelectorAll('.case-study');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });
    });
}

function initVideoTestimonials() {
    // Handle video testimonial play buttons
    const videoPlayButtons = document.querySelectorAll('.video-play-button');
    
    videoPlayButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.case-study');
            const title = card.querySelector('h3').textContent;
            
            // For now, show an alert. In production, this would open a video modal
            alert(`Video testimonial for ${title} would play here. In production, this would open a video player modal.`);
        });
    });
}

function initRatingDisplays() {
    // Animate star ratings on page load
    const starRatings = document.querySelectorAll('.fa-star');
    
    starRatings.forEach((star, index) => {
        setTimeout(() => {
            star.style.opacity = '0';
            star.style.transform = 'scale(0.5)';
            star.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                star.style.opacity = '1';
                star.style.transform = 'scale(1)';
            }, 100);
        }, index * 100);
    });
}

// Function to generate random testimonial data (for demo purposes)
function generateTestimonialData() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            company: "TechFlow Solutions",
            initials: "SJ",
            rating: 5,
            quote: "Koi Digital completely transformed our online presence. Within 6 months, we went from struggling to find qualified leads to having more business than we could handle.",
            results: [
                "300% increase in organic traffic",
                "$2.1M in new pipeline opportunities",
                "45% improvement in lead quality",
                "Top 3 rankings for target keywords"
            ]
        },
        {
            name: "Mike Rodriguez",
            company: "Austin Artisan Co.",
            initials: "MR",
            rating: 5,
            quote: "The team at Koi Digital doesn't just execute campaigns – they become true partners in your business growth.",
            results: [
                "180% increase in online sales",
                "3x increase in social media engagement",
                "250% growth in email subscribers",
                "Established strong local brand presence"
            ]
        }
    ];
    
    return testimonials;
}

// Function to display testimonials dynamically (if needed)
function displayTestimonials(containerId, testimonials) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    testimonials.forEach(testimonial => {
        const testimonialHTML = `
            <div class="case-study">
                <div class="case-study-content">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <div class="testimonial-author-avatar">${testimonial.initials}</div>
                        <div>
                            <h3 style="margin-bottom: 0.5rem;">${testimonial.name}</h3>
                            <p style="color: var(--medium-gray); margin-bottom: 0.5rem;">${testimonial.company}</p>
                            <div class="testimonial-rating">
                                ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                            </div>
                        </div>
                    </div>
                    <blockquote style="font-style: italic; font-size: 1.2rem; margin-bottom: 2rem; line-height: 1.8;">
                        "${testimonial.quote}"
                    </blockquote>
                    <div class="testimonial-results">
                        <h4>Results Achieved:</h4>
                        <ul>
                            ${testimonial.results.map(result => `<li><i class="fas fa-check"></i>${result}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        container.insertAdjacentHTML('beforeend', testimonialHTML);
    });
}

// Export functions for potential use in other scripts
window.TestimonialsModule = {
    initTestimonials,
    initVideoTestimonials,
    initRatingDisplays,
    generateTestimonialData,
    displayTestimonials
}; 