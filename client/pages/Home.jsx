import React from 'react'

const Home = () => {
    return (
        <div className='p-8 w-screen'>
            <p className='bg-[#1C1C1C] text-white p-4 rounded-2xl my-4 opacity-50'>
                Welcome to your personalized Instagram feed, where moments turn into memories. Discover photos and videos shared by friends, creators, and communities you love. Stay connected through stories, explore trending content, and engage with posts that inspire you every day. From capturing everyday life to sharing special highlights, your home feed keeps you updated, entertained, and connected — all in one place.
            </p>

            <div className='flex flex-wrap gap-26 w-screen'>
                <div className='bg-[#E9E9E9] text-black rounded-2xl p-4 w-1/2'>
                    <h1 className='text-3xl'>Here’s up-to-date Google Play Store data about Instagram (as of early 2026):</h1>
                    <p>
                        <ul>
                            <li>🔹 Developer: Instagram (Meta)</li>
                            <li>🔹 Category: Social</li>
                            <li>🔹 Cost: Free</li>
                            <li>🔹 Total Installs: Over 5,000,000,000 installs worldwide on the Play Store — making it one of the most downloaded mobile apps ever.</li>
                            <li>🔹 Average Rating: ~3.9 out of 5 stars (based on hundreds of millions of ratings).</li>
                        </ul>
                    </p>
                </div>
                <div className='bg-[#E9E9E9] text-black rounded-2xl p-4 w-1/3'>
                    <h1 className='text-3xl'>📊 What This Means:</h1>
                    <p>With billions of installs, Instagram ranks among the most popular apps on Android worldwide.

                        The large volume of ratings reflects a broad and active user base, though the average rating shows mixed feedback from users.

                        Instagram’s ranking in the store remains strong, reflecting continued engagement and relevance.

                        📌 Data Collection & Privacy:
                        The Play Store collects and displays information about the app’s functionality, data usage categories (e.g., analytics, personalization, location), and security practices like encrypted data transfer. Users can request data deletion under certain conditions.

                        Would you like this as a formatted section for your Instagram promo/post description? (I can tailor it for UI text or marketing copy.)</p>
                </div>
            </div>
        </div>
    )
}

export default Home
