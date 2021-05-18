import { FaSearch } from 'react-icons/fa';
import { Container } from "./styles";

export function SearchData() {
  return (
    <Container>
      <div>
        <input
          placeholder="Titulo"
        />
        <button>
          <FaSearch className="iconContent" />
        </button>
      </div>
    </Container>
  );
}
