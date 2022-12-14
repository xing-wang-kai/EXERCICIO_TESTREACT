import Formulario from "../components/formulario/Formulario";
import ParticipantesList from "../components/ParticipanteList/ParticipantesList";
import Rodape from "../components/Rodape/Rodape";
import Card from '../components/Card/card';


export default function Configure () {
    return(
        <Card>
            <section>
                <h2>Let's to play!</h2>
                <Formulario/>
                <ParticipantesList/>
                <Rodape/>
            </section>
        </Card>
    )
}