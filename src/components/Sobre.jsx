import React, { useState } from "react";
import Modal from "react-modal";

// Estilização básica do modal com centralização
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center', // Centraliza o conteúdo no modal
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function Sobre() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const team = [
    {
      id: 1,
      name: "Person 1",
      description: "Some placeholder content for the first person.",
      details: "Detailed information about Person 1.",
      image: "https://via.placeholder.com/140"
    },
    {
      id: 2,
      name: "Person 2",
      description: "Some placeholder content for the second person.",
      details: "Detailed information about Person 2.",
      image: "https://via.placeholder.com/140"
    },
    {
      id: 3,
      name: "Person 3",
      description: "Some placeholder content for the third person.",
      details: "Detailed information about Person 3.",
      image: "https://via.placeholder.com/140"
    }
  ];

  const openModal = (person) => {
    setSelectedPerson(person);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPerson(null);
  };

  return (
    <div className="container marketing mt-5">
      <h1 className="text-center mb-5">Equipe</h1>
      <div className="row text-center">
        {team.map((person) => (
          <div className="col-lg-4 mx-auto" key={person.id}>
            <img
              src={person.image}
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              alt={person.name}
            />
            <h2 className="fw-normal">{person.name}</h2>
            <p>{person.description}</p>
            <p>
              <button className="btn btn-secondary" onClick={() => openModal(person)}>
                View details »
              </button>
            </p>
          </div>
        ))}
      </div>

      {/* React Modal para exibir detalhes */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Person Details Modal"
        ariaHideApp={false}
      >
        {selectedPerson && (
          <div>
            {/* Imagem da pessoa no modal */}
            <img
              src={selectedPerson.image}
              className="bd-placeholder-img rounded-circle mb-3"
              width="140"
              height="140"
              alt={selectedPerson.name}
            />
            {/* Nome e detalhes da pessoa */}
            <h2>{selectedPerson.name}</h2>
            <p>{selectedPerson.details}</p>
            {/* Botão para fechar o modal */}
            <button className="btn btn-secondary mt-3" onClick={closeModal}>
              Close
            </button>
          </div>
        )}
    </Modal>
    <h1 className="text-center mt-5">Clinica</h1>

    {/* Envolve o parágrafo em uma div com uma largura máxima e margens automáticas */}
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem sunt consequatur ratione libero! Provident optio expedita iure at
            adipisci laudantium aliquid cupiditate. Non quasi distinctio laudantium accusantium laborum, minus beatae?
        </p>
        <img src="images/endoscenter_Logo.jpg" alt="" />
    </div>
    </div>
  );
}

export default Sobre;
