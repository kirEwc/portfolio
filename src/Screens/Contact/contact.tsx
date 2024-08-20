export  const Contact = () => {
    return (
        <div className="bg-slate-600 max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-foreground mb-4">Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-muted-foreground mb-1" htmlFor="name">Nombre | Name</label>
                    <input className="w-full p-2 border border-border rounded" type="text" id="name" placeholder="Nombre | Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-muted-foreground mb-1" htmlFor="email">E-mail</label>
                    <input className="w-full p-2 border border-border rounded" type="email" id="email" placeholder="E-mail" />
                </div>
                <div className="mb-4">
                    <label className="block text-muted-foreground mb-1" htmlFor="subject">Asunto | Subject</label>
                    <input className="w-full p-2 border border-border rounded" type="text" id="subject" placeholder="Asunto | Subject" />
                </div>
                <div className="mb-4">
                    <label className="block text-muted-foreground mb-1" htmlFor="message">Mensaje | Message</label>
                    <textarea className="w-full p-2 border border-border rounded" id="message"  placeholder="Mensaje | Message"></textarea>
                </div>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded" type="submit">Enviar</button>
            </form>
        </div>
    )
}