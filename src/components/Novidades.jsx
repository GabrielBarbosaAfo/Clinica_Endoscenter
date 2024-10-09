import React, { useState, useEffect } from "react";

function Novidades() {
    const posts = [
        { id: 1, text: "This is a wider card with supporting text.", title: "titulo", postedDate: new Date("2024-10-09T10:00:00") },
        { id: 2, text: "This is another card with additional content.", title: "titulo", postedDate: new Date("2024-10-09T14:30:00") },
        { id: 3, text: "This card contains more details.", title: "titulo", postedDate: new Date("2024-10-09T08:15:00") },
        { id: 4, text: "Another card with different content.", title: "titulo", postedDate: new Date("2024-10-09T16:45:00") },
        { id: 5, text: "Here is a card with more supporting text.", title: "titulo", postedDate: new Date("2024-10-09T12:00:00") },
        { id: 6, text: "Final example of a card content.", title: "titulo", postedDate: new Date("2024-10-09T09:00:00") }
    ];

    // Função para calcular o tempo decorrido desde a postagem
    const getElapsedTime = (postedDate) => {
        const now = new Date();
        const diffInMilliseconds = now - postedDate;
        const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

        if (diffInMinutes < 60) {
            return `${diffInMinutes} minutes ago`;
        } else if (diffInMinutes < 1440) {
            const hours = Math.floor(diffInMinutes / 60);
            return `${hours} hours ago`;
        } else {
            const days = Math.floor(diffInMinutes / 1440);
            return `${days} days ago`;
        }
    };

    return (
        <div>
            <h1 className="text-center mt-5">Noticias</h1>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {posts.map((post) => (
                            <div className="col" key={post.id}>
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                    <div className="card-body">
                                        <h1 className="text-center">{post.title}</h1>
                                        <p className="card-text">{post.text}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            {/* Calcula e exibe o tempo decorrido para cada postagem */}
                                            <small className="text-body-secondary">{getElapsedTime(post.postedDate)}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Novidades;
