import React from 'react';
import '../styles/ShopByActivity.css';

import roadImg from '../assets/activity-road.png';
import trailImg from '../assets/activity-trail.png';
import lifestyleImg from '../assets/activity-lifestyle.png';

const ShopByActivity = () => {
    const activities = [
        {
            id: 1,
            title: 'ROAD RUNNING',
            subtitle: 'Speed & Distance',
            image: roadImg,
            link: '#road'
        },
        {
            id: 2,
            title: 'TRAIL & HIKING',
            subtitle: 'Grip & Adventure',
            image: trailImg,
            link: '#trail'
        },
        {
            id: 3,
            title: 'ACTIVE LIFESTYLE',
            subtitle: 'All-Day Comfort',
            image: lifestyleImg,
            link: '#lifestyle'
        }
    ];

    return (
        <section className="activity-section">
            <div className="section-header">
                <h2 className="section-title">Find Your Run</h2>
            </div>

            <div className="activity-grid">
                {activities.map((activity) => (
                    <div key={activity.id} className="activity-card">
                        <div className="activity-image-wrapper">
                            <img src={activity.image} alt={activity.title} className="activity-image" />
                            <div className="activity-overlay"></div>
                        </div>
                        <div className="activity-content">
                            <h3 className="activity-subtitle">{activity.subtitle}</h3>
                            <h2 className="activity-title">{activity.title}</h2>
                            <button className="shop-btn">Shop Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopByActivity;
