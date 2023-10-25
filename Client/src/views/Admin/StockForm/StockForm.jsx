import style from './StockForm.module.css';

export default function StockForm() {
	return (
		<div className={style.container}>
			<form className={style.form}>
				<label>Categoria</label>
				<select className={style.input}>
					<option value="1">Alergias</option>
					<option value="2">Digestivos</option>
					<option value="3">Antiacido</option>
					<option value="4">Laxante</option>
					<option value="5">Vitaminas</option>
				</select>
				<label>Marca</label>
				<input
					type="text"
					className={style.input}
				/>
				<label>Accion terapeutica</label>
				<input
					type="text"
					className={style.input}
				/>
				<label>Presentacion</label>
				<select className={style.input}>
					<option value="1">Tableta</option>
					<option value="2">Capsula Blanda</option>
					<option value="3">Liquido</option>
					<option value="4">Gel</option>
					<option value="5">Sobre</option>
					<option value="6">Comprimido</option>
					<option value="7">Pote</option>
					<option value="8">Caramelo</option>
				</select>
				<label>Stock</label>
				<input
					type="text"
					className={style.input}
				/>
				<label>Imagen</label>
				<input
					type="text"
					className={style.input}
				/>
				<button>Guardar</button>
			</form>
		</div>
	);
}
