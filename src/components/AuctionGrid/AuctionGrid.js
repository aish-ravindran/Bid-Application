import React, { useState, useEffect } from 'react';
import AuctionCard from '../AuctionCard/AuctionCard';
import axios from 'axios';
import './AuctionGrid.css'

const AuctionGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [auctions, setAuctions] = useState([]);
    const [filteredAuctions, setFilteredAuctions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/productData.json');
                const data = response.data;

                setAuctions(data)
                setFilteredAuctions(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            const filtered = selectedCategory === "All"
                ? auctions
                : auctions.filter(item => item.title.includes(selectedCategory));


            setFilteredAuctions(filtered);
        }

    }, [selectedCategory])

    const handleFilterChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className='gridContainer'>
            <div className='filterContainer'>
                <select onChange={handleFilterChange} value={selectedCategory}>
                    <option value="All">Showing all</option>
                    <option value="Headphones">Headphones</option>
                    <option value="AirPod">AirPod</option>
                    <option value="Power Bank">Power Bank</option>
                    <option value="Speaker">Speaker</option>
                    <option value="Camera">Camera</option>
                </select>
            </div>
            <div className='auctionGridContainer'>
                {filteredAuctions.map((auction, index) => (
                    <AuctionCard key={index} auction={auction} />
                ))}
            </div>
        </div>
    );
};

export default AuctionGrid;
