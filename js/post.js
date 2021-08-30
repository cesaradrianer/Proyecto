const post = document.getElementById("post");
const cajacomentario = document.getElementById("textarea");
const boton_publicar = document.getElementById("boton_post");
const usuario = document.getElementById("id-usr2");


window.onload = function (){
	saveInStorage();    
	boton_publicar.addEventListener("click", (e) => {    
		if (cajacomentario.value == "") {
			e.preventDefault();
			/* window.alert("Por favor llena el formulario"); */
			Swal.fire({
				icon: 'warning',
				title: 'ALERTA',
				text: 'Por favor, verifica haber llenado los campos requeridos',
			  });
			cajacomentario.focus();
			return false;
		} 		
		else {
			post.insertAdjacentHTML('beforeend', 
			`<div>
				<div class="card">
			  <strong><p>Dice:<p/</strong>
			</div>
			<div class="card-body">
			  <p class="card-text">${cajacomentario.value}.</p>
			  <button class="btn btn-md-2 btn-primary" type ="button"><i class="icon-thumbs-up">Me gustas</i></button>
			  <button class=" btn btn-md-2 btn-primary" type ="button" id="coment">Comentar</button>
			</div>
		  </div>
			`
			)

			const comentario = document.getElementById("coment");
			comentario.addEventListener("clik", (e) =>{
				post.insertAdjacentHTML('beforeend', 
				`
				<div class="form-group with-icon-right ">
					<textarea class="form-control" id = "textarea" placeholder="¿Que piensas?"></textarea>
				</div>
				<button class="btn btn-md-2 btn-primary" type ="button" id="boton_post">Publicar</button>`)
			})
			
		}          
			let user = {
			nombre: usuario.value,                
			post: cajacomentario.value
			};            

			usuario.value = '';
			cajacomentario.value = '';

			appendObjectToLocalStorage(user);
		}
	)

		function appendObjectToLocalStorage(object){
		let users = [],
		dataInLocalStorage = localStorage.getItem('users');

		if (dataInLocalStorage !== null) 
		{
		users = JSON.parse(dataInLocalStorage);
		}
		users.push(object);
		localStorage.setItem('users', JSON.stringify(users));
		saveInStorage();
	}

	function saveInStorage(){
		let users = [],      
		postSection = document.querySelector('section');
		users.forEach(function (parameter){
			let card = document.createElement("card-body"),
			cardName = document.createElement("card-title"),
			cardPost = document.createElement("card-text");

			cardName.innerHTML = parameter.nombre;
			cardPost.innerHTML = parameter.post;               

			card.appendChild(cardName);
			card.appendChild(cardPost);            

			postSection.appendChild(card);
		}
		);
	}
}