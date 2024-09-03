import React from 'react';

export default function CartPage() {
    return (
        <div className="bg-blue-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">Keranjang Belanja</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                {/* Daftar item keranjang akan ditambahkan di sini */}
                <p className="text-gray-600">Keranjang Anda kosong.</p>
            </div>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Lanjutkan ke Pembayaran
            </button>
        </div>
    )
}