import { useState } from "react";
import "./App.css";

function App() {
	// Estado para armazenar os dados do formulário
	const [formData, setFormData] = useState({
		nome: "",
		descricao: "",
		curso: "",
		periodo: "",
		professor: "",
		quantidadeAlunos: "",
	});

	// Estado para controlar se o modal está aberto ou fechado
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Função para atualizar o estado conforme o usuário digita
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Função disparada ao enviar o formulário
	const handleSubmit = (e) => {
		e.preventDefault(); // Evita que a página recarregue
		setIsModalOpen(true); // Abre o modal
	};

	// Função para fechar o modal
	const closeModal = () => {
		setIsModalOpen(false);
		limparCampos();
	};

	// Função para limpar todos os campos do formulário
	const limparCampos = () => {
		setFormData({
			nome: "",
			descricao: "",
			curso: "",
			periodo: "",
			professor: "",
			quantidadeAlunos: "",
		});
	};

	return (
		<div className="container">
			<h1>Cadastro de Disciplina</h1>

			{/* FORMULÁRIO */}
			<form onSubmit={handleSubmit} className="form-disciplina">
				<div className="form-group">
					<label>Nome da Disciplina:</label>
					<input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
				</div>

				<div className="form-group">
					<label>Descrição da Disciplina:</label>
					<textarea name="descricao" value={formData.descricao} onChange={handleChange} required rows="3" />
				</div>

				<div className="form-group row">
					<div className="half-width">
						<label>Curso:</label>
						<input type="text" name="curso" value={formData.curso} onChange={handleChange} required />
					</div>
					<div className="half-width">
						<label>Período:</label>
						<input type="text" name="periodo" value={formData.periodo} onChange={handleChange} required />
					</div>
				</div>

				<div className="form-group row">
					<div className="half-width">
						<label>Professor:</label>
						<input type="text" name="professor" value={formData.professor} onChange={handleChange} required />
					</div>
					<div className="half-width">
						<label>Quantidade de Alunos:</label>
						<input
							type="number"
							name="quantidadeAlunos"
							value={formData.quantidadeAlunos}
							onChange={handleChange}
							required
							min="1"
						/>
					</div>
				</div>

				<div className="button-group">
					<button type="button" onClick={limparCampos} className="btn-clear">
						Limpar Campos
					</button>
					<button type="submit" className="btn-submit">
						Cadastrar Disciplina
					</button>
				</div>
			</form>

			{/* MODAL */}
			{isModalOpen && (
				<div className="modal-overlay">
					<div className="modal-content">
						<h2>Resumo do Cadastro</h2>
						<hr />
						<p>
							<strong>Disciplina:</strong> {formData.nome}
						</p>
						<p>
							<strong>Descrição:</strong> {formData.descricao}
						</p>
						<p>
							<strong>Curso:</strong> {formData.curso}
						</p>
						<p>
							<strong>Período:</strong> {formData.periodo}
						</p>
						<p>
							<strong>Professor:</strong> {formData.professor}
						</p>
						<p>
							<strong>Quantidade de Alunos:</strong> {formData.quantidadeAlunos}
						</p>

						<button onClick={closeModal} className="btn-close">
							Fechar
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
