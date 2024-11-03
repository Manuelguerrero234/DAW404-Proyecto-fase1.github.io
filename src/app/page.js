"use client";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

export default function Home() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('');

    const addToCart = (itemName, itemPrice) => {
        setCartItems([...cartItems, { name: itemName, price: itemPrice }]);
        setTotal(prevTotal => prevTotal + itemPrice);
    };

    const handlePayment = () => {
        if (paymentMethod) {
            alert(`Pago procesado con ${paymentMethod} por un total de $${total.toFixed(2)}`);
            setCartItems([]);
            setTotal(0);
        } else {
            alert("Seleccione un método de pago");
        }
    };

    return (
        <div className={styles.page}>
            <header className="text-center mt-3">
                <h1>La Dolce Vita - Restaurante Italiano</h1>
            </header>
            <main className="container mt-5">
                <section id="inicio">
                    <h2>Bienvenido a La Dolce Vita</h2>
                    <p>Disfruta de la mejor cocina italiana en un ambiente acogedor y elegante.</p>
                </section>
                
                <section id="menu" className="mt-5">
                    <h2>Menú</h2>
                    <div className="row">
                        {[
                            { name: 'Pizza', price: 10, img: '/img/pizza.png' },
                            { name: 'Lasaña', price: 8, img: '/img/lasaña.png' },
                            { name: 'Ensalada', price: 5, img: '/img/ensalada.png' },
                            { name: 'Pasta', price: 15, img: '/img/pasta.png' },
                            { name: 'Ravioli', price: 25, img: '/img/ravioli.png' },
                            { name: 'Risotto', price: 20, img: '/img/risotto.png' },
                            { name: 'Tiramisu', price: 15, img: '/img/tiramisu.png' },
                            { name: 'Gelato', price: 15, img: '/img/gelato.png' }
                        ].map((item, index) => (
                            <div key={index} className="col-md-3 mb-4">
                                <div className="card">
                                    <img src={item.img} className="card-img-top" alt={item.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">${item.price}</p>
                                        <button className="btn btn-primary" onClick={() => addToCart(item.name, item.price)}>Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="mt-5">
                    <h2>Carrito</h2>
                    <ul className="list-group">
                        {cartItems.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {item.name} <span>${item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-3">Total: ${total.toFixed(2)}</p>
                </section>
                <section className="mt-5">
                    <h2>Formas de Pago</h2>
                    <select
                        className="form-select mb-3"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="" disabled>Seleccione un método</option>
                        <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Efectivo">Efectivo</option>
                    </select>
                    <button className="btn btn-success" onClick={handlePayment}>Procesar Pago</button>
                </section>
                <section id="reservas" className="mt-5">
                    <h2>Reserva una Mesa</h2>
                    <form id="reservationForm">
                        <div className="mb-3">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date">Fecha:</label>
                            <input type="date" id="date" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time">Hora:</label>
                            <input type="time" id="time" className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-success">Confirmar Reserva</button>
                    </form>
                </section>

                <section id="contacto" className="mt-5">
                    <h2>Contáctanos</h2>
                    <form id="contactForm">
                        <div className="mb-3">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" className="form-control" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                    </form>
                    <div id="contact-info" className="mt-3">
                        <p><strong>Teléfono:</strong> +505 1356 7887</p>
                        <p><strong>Correo Electrónico:</strong> Alessandro Rossi@ladolcevita.com</p>
                        <p><strong>Dirección:</strong> Plaza Merliot, Ciudad San Salvador, El Salvador</p>
                    </div>
                </section>
            </main>
            <footer className="text-center mt-5">
                <p>&copy; 2024 La Dolce Vita. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
