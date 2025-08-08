import React from "react";

export default function Footer() {
    const tahunSekarang = new Date().getFullYear();
    return (
        <footer className="bg-white py-12 text-center border-t border-gray-100">
            <div className="container mx-auto px-6">
                <p className="text-gray-600 font-['Inter']">
                    Copyright &copy; { tahunSekarang } <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-bold">Rizki Cahya</span>. All rights reserved.
                </p>
            </div>
        </footer>
    )
}