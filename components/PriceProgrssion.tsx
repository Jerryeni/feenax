"use client";

import { ArrowUp } from "lucide-react";

interface PriceTile {
    label: string;
    price: number;
    percentage: number;
}

const priceTiles: PriceTile[] = [
    {
        label: "SEED SALE",
        price: 0.50,
        percentage: 0,
    },
    {
        label: "PRESALE 1",
        price: 0.60,
        percentage: 20.0,
    },
    {
        label: "PRESALE 2",
        price: 0.90,
        percentage: 50.0,
    },
    {
        label: "PRIVATE SALE 1",
        price: 1.20,
        percentage: 33.33,
    },
    {
        label: "PRIVATE SALE 2",
        price: 1.50,
        percentage: 25.0,
    },
    {
        label: "PRIVATE SALE 3",
        price: 1.80,
        percentage: 20.0,
    },
    {
        label: "PRIVATE SALE 4",
        price: 2.00,
        percentage: 11.11,
    },
    {
        label: "CEX LISTING",
        price: 3.00,
        percentage: 50.0, 
      },
      {
        label: "PRICE 2027",
        price: 50.00,
        percentage: 1566.67,
      },
];

export function PriceProgression() {
    return (
        <div className="w-full space-y-8  mx-auto bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-2 mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-whitex gradient-text">
                    FNX PRICING TIERS
                    </h2>
                    <p className="text-white font-bold">Feenax Coin Price Progression: <br/>

Shows the Price Increase from Seed Sale to CEX Listing and 2027 Price Prediction.</p>
                </div>

                <div className="relative py-24 overflow-hiddenx">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 " />

                    {/* Dotted path */}
                    {/* <svg className="absolute inset-0 w-full h-full">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="yellow" />
                                <stop offset="100%" stopColor="yellow" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <path
                            d="M 10% 90% Q 30% 70%, 50% 50% T 90% 10%"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            strokeDasharray="6 4"
                            fill="none"
                            filter="url(#glow)"
                        />
                        {priceTiles.map((tile, index) => (
                            <text
                                key={`annotation-${index}`}
                                x={`${10 + (index * 20)}%`}
                                y={`${90 - (index * 20)}%`}
                                fill="yellow"
                                fontSize="12"
                                textAnchor="middle"
                                filter="url(#glow)"
                                className="select-none"
                            >
                                +${tile.price}
                            </text>
                        ))}
                    </svg> */}

                    <div className="relative z-10 flex justify-between gap-4 items-stretch">
                        {priceTiles.map((tile, index) => {
                            const topPosition = index * 10 ;
                            return (
                                <div
                                    key={tile.label}
                                    className="w-[100%] transition-all duration-300"
                                    style={{
                                        transform: `translateY(-${topPosition}%)`
                                    }}
                                >
                                    <div className="group relative ">
                                        {/* Glow effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-yellow-600/30   blur opacity-0 group-hover:opacity-100 transition duration-300 " />

                                        <div className="relative bg-gradient-to-b from-yellow-500/30 via-black to-transparent backdrop-blur-sm roundedx    p-4  transition-all duration-300 group-hover:border-yellow-500/40 group-hover:translate-y-[-2px] h-32">
                                            <div className="space-y-3">
                                                {/* Progress bar with gradient */}
                                                <div className="h-1 w-full rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-500/40 overflow-hidden">
                                                    <div className="h-full w-full bg-gradient-to-r from-yellow-500 to-yellow-400 transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
                                                </div>

                                                <div className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                                    ${tile.price.toFixed(2)}
                                                </div>



                                                {tile.percentage > 0 && (
                                                    <div className="flex items-center text-yellow-500 text-sm font-medium">
                                                        <ArrowUp className="h-4 w-4 mr-1" />
                                                        +{tile.percentage.toLocaleString()}%
                                                    </div>
                                                )}
                                                {/* <div className="text-sm md:text-md text-white  group-hover:text-gray-300 transition-colors">
                                                    {tile.label}
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="text-sm md:text-md font-bold text-white text-center group-hover:text-gray-300 transition-colors">
                                                    {tile.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                
                    
                </div>
                <p className="text-center ">
                    
                </p>
            </div>

        </div>
    );
}