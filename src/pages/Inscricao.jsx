import { useLocation } from "react-router-dom";
import FormEvent from "../components/FormularioInscricao";

function Inscricao() {
  const location = useLocation();

  return (
    <>
        <FormEvent id_evento={location.state.id_evento} nome={location.state.titulo} data={location.state.data} cidade={location.state.cidade} estado={location.state.estado}/>
    </>
  )
}

export default Inscricao;