import { NextPage } from "next"
import { Layout } from '../../layouts/Layout';
import { useForm } from '../../hooks/useForm';

import { send } from "emailjs-com";
import Swal from "sweetalert2";

const formData = {
    name: "",
    city: "",
    numSucursales: "",
    phone: "",
    email: ""
};

interface formData {
    name?: string,
    city?: string,
    numSucursales?: string,
    phone?: string,
    email?: string,
}

const HomePage: NextPage = () => {

    const { formState, onInputChange, onResetForm } = useForm(formData);

    const {
        name,
        city,
        numSucursales,
        phone,
        email
    }: formData = formState;

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        send("id1", "masterclass", formState, "WllcpADNcflscCJRW")
            .then((response) => {
                
                Swal.fire(
                    "El mensaje se ha enviado!",
                    "Nos comunicaremos pronto contigo!",
                    "success"
                );
                onResetForm();
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salió mal!",
                    footer: "Intenta de nuevo más tarde",
                });
            });
    };


    return (
        <Layout title="Master Class | Creativa 2020" description="¡MASTERCLASS GRATUITA! Te damos las claves para que tu negocio logre su meta mensual." >
            <>
                <section className=" bg-dark">
                    <div className="container py-5 ">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col">
                                <div className="card card-registration my-4">
                                    <div className="row g-0">
                                        <div className="col-xl-6">
                                            <div className="card-body p-md-5 text-black">
                                                <h3 className="mb-5 text-uppercase">¡Únete a la comunidad!</h3>
                                                <form
                                                    action="/"
                                                    method="POST"
                                                    className="php-email-form"
                                                    onSubmit={onSubmit}
                                                >
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text" id="name" name="name" autoComplete="off"
                                                                    className="form-control form-control-lg" required
                                                                    value={name}
                                                                    onChange={onInputChange} />
                                                                <label className="form-label" htmlFor="name">Nombre de la óptica</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text" id="city" name="city" autoComplete="off"
                                                                    className="form-control form-control-lg" required value={city}
                                                                    onChange={onInputChange} />
                                                                <label className="form-label" htmlFor="city">Ciudad (es)</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text" id="numSucursales" name="numSucursales" autoComplete="off"
                                                                    className="form-control form-control-lg" required value={numSucursales}
                                                                    onChange={onInputChange} />
                                                                <label className="form-label" htmlFor="numSucursales">Número de sucursales</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="tel" id="phone" name="phone" autoComplete="off"
                                                                    className="form-control form-control-lg" required value={phone}
                                                                    onChange={onInputChange} />
                                                                <label className="form-label" htmlFor="phone">Teléfono
                                                                    celular</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-outline">
                                                                <input type="tel" id="email" name="email" autoComplete="off"
                                                                    className="form-control form-control-lg" required value={email}
                                                                    onChange={onInputChange} />
                                                                <label className="form-label" htmlFor="email">Correo electrónico</label>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="form-check form-check-inline mb-0 me-4">
                                                        <label className="form-check-label" htmlFor="2" style={{ fontSize: '12px' }}>Al registrarme, estoy de
                                                            acuerdo con los términos y
                                                            condiciones.</label>
                                                    </div>
                                                    <div className="d-flex justify-content-end pt-3">
                                                        <button type="submit"
                                                            className="btn btn-warning btn-lg ms-2" style={{ color: 'white', backgroundColor: '#6659DF' }}>Registrarme</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 d-xl-block">
                                            <img src="img/masterclass.png" alt="Imagen de la master class" className="img-fluid"
                                                style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Layout>
    )
}

export default HomePage;