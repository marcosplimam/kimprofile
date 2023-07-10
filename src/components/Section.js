export default function Section(props) {
    return (
        <section>
            <div>
                <h2 style={{ textAlign:'center'}}>{props.profile}</h2>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>

                <ul className={props.className}>
                    {props.children}
                </ul>
            </div>
    </section>
    );
}