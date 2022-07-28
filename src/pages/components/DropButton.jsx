import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropButton() {
  return (
    <>
      <div>
        {[DropdownButton, ].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="sm"
            variant="secondary"
            title="Acciones"
          >
            <Dropdown.Item eventKey="1">Modificar</Dropdown.Item>
            <Dropdown.Item eventKey="2">Activar/Desactivar</Dropdown.Item>
            <Dropdown.Item eventKey="3">Cambiar clave fiscal</Dropdown.Item>
          </DropdownType>
        ))}
      </div>
    </>
  );
}

export default DropButton;