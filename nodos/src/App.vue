<template>
  <div class="contenedor">
    <div class="datos">
      
    </div>
    <div class="grafo">
      <div>
        <div class="tree">
          <ul>
            <li> <a href="#">{{dataTree[0].name}}</a>
              <ul>
                <li v-for="(admin, i) in dataTree[0].children" :key="i" link> 
                  <a href="#">{{admin.name}}</a>
                  <ul>
                    <li v-for="(admin2, i) in admin.children" :key="i" link> 
                      <a href="#">{{admin2.name}}</a>
                      <ul>
                        <li v-for="(admin3, i) in admin2.children" :key="i" link> 
                          <a href="#">{{admin3.name}}</a>
                          <ul>
                            <li v-for="(admin4, i) in admin3.children" :key="i" link> 
                              <a href="#">{{admin4.name}}</a> 
                              <ul>
                                <li v-for="(admin5, i) in admin4.children" :key="i" link> 
                                  <a href="#">{{admin5.name}}</a> 
                                  <ul>
                                    <li v-for="(admin6, i) in admin5.children" :key="i" link> 
                                      <a href="#">{{admin6.name}}</a>  
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <v-row col-12>
          <v-text-field
            v-model="ptoInicio"
            label="Punto Inicio"
            required
            outlined
          >
          </v-text-field>
          <v-text-field
            v-model="ptoFin"
            label="Punto Fin"
            required
            outlined
          ></v-text-field>
          <v-btn block class="mr-4" submit @click="armarArreglo()">Recorrido</v-btn>
          <span>{{ruta}}</span>
        </v-row>
      </div>
    </div>
    <footer>
      <div class="footer-content">
        <h2>Inteligencia Artificial</h2>
        <p>Autor: Darling F. Gonzales Llanca</p>
        <p>Editor: David Vera Cabanillas</p>
      </div>
      
      <div class="footer-bottom">
        <p>copyright &copy;2021 Inteligencia Artificial</p>
      </div>
    </footer>
  </div>
  
</template>

<script>
 
export default {
  data () {
    return {
      ptoInicio: '',
      ptoFin: '',
      ruta: [],
      dataTree:
      [
        {
          name: "1",
          parent: null,
          valueParent: "1",
          value: 0,
          children: [
            {
              name: "2",
              parent: "1",
              valueParent: "2",
              value: 2.7
            },
            {
              name: "7",
              parent: "1",
              valueParent: "7",
              value: 6.5
            },
            {
              name: "8",
              parent: "1",
              valueParent: "8",
              value: 12,
              children: [
                {
                  name: "15",
                  parent: "8",
                  valueParent: "15",
                  value: 3.5,
                  children: [
                    {
                      name: "20",
                      parent: "15",
                      valueParent: "20",
                      value: 4
                    }
                  ]
                }
              ]
            },
            {
              name: "9",
              parent: "1",
              valueParent: "9",
              value: 10,
              children: [
                {
                  name: "16",
                  parent: "9",
                  valueParent: "16",
                  value: 3.5,
                  children: [
                    {
                      name: "21",
                      parent: "16",
                      valueParent: "21",
                      value: 3.5
                    }
                  ]
                }
              ]
            },
            {
              name: "6",
              parent: "1",
              valueParent: "6",
              value: 6,
              children: [
                {
                  name: "11",
                  parent: "6",
                  valueParent: "11",
                  value: 5.8,
                  children: [
                    {
                      name: "10",
                      parent: "11",
                      valueParent: "10",
                      value: 4.3
                    },
                    {
                      name: "17",
                      parent: "11",
                      valueParent: "17",
                      value: 2.6,
                      children: [
                        {
                          name: "22",
                          parent: "17",
                          valueParent: "22",
                          value: 2.9,
                          children: [
                            {
                              name: "23",
                              parent: "22",
                              valueParent: "23",
                              value: 3,
                              children: [
                                {
                                  name: "24",
                                  parent: "23",
                                  valueParent: "24",
                                  value: 1.5
                                },
                                {
                                  name: "25",
                                  parent: "23",
                                  valueParent: "25",
                                  value: 1.4
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "12",
                      parent: "11",
                      valueParent: "12",
                      value: 6
                    }
                  ]
                }
              ]
            },
            {
              name: "5",
              parent: "1",
              valueParent: "5",
              value: 8,
              children: [
                {
                  name: "12",
                  parent: "5",
                  valueParent: "12",
                  value: 6
                },
                {
                  name: "14",
                  parent: "5",
                  valueParent: "14",
                  value: 4.2,
                  children: [
                    {
                      name: "13",
                      parent: "14",
                      valueParent: "13",
                      value: 2
                    },
                    {
                      name: "18",
                      parent: "14",
                      valueParent: "18",
                      value: 1.4
                    },
                    {
                      name: "19",
                      parent: "14",
                      valueParent: "19",
                      value: 4
                    }
                  ]
                }
              ]
            },
            {
              name: "4",
              parent: "1",
              valueParent: "4",
              value: 5
            },
            {
              name: "3",
              parent: "1",
              valueParent: "3",
              value: 3.4,
              children: [
                {
                  name: "26",
                  parent: "3",
                  valueParent: "26",
                  value: 6.5,
                  children: [
                    {
                      name: "31",
                      parent: "26",
                      valueParent: "31",
                      value: 1.5
                    },
                    {
                      name: "30",
                      parent: "26",
                      valueParent: "30",
                      value: 3,
                      children: [
                        {
                          name: "35",
                          parent: "30",
                          valueParent: "35",
                          value: 2.8
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "28",
                  parent: "3",
                  valueParent: "28",
                  value: 13,
                  children: [
                    {
                      name: "34",
                      parent: "28",
                      valueParent: "34",
                      value: 3
                    },
                    {
                      name: "33",
                      parent: "28",
                      valueParent: "33",
                      value: 3.7
                    }
                  ]
                },
                {
                  name: "27",
                  parent: "3",
                  valueParent: "27",
                  value: 5.7,
                  children: [
                    {
                      name: "32",
                      parent: "27",
                      valueParent: "32",
                      value: 2.5
                    }
                  ]
                },
                {
                  name: "29",
                  parent: "3",
                  valueParent: "29",
                  value: 17
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods:{

    buscarObjeto(arbol, valor, atributo) {
      let objetoEncontrado = null;
      let objetoAux = null;
      for(let i=0; i<arbol.length; i++) {
        if(atributo == "n") { // busqueda por nombre
          if (arbol[i].name == valor) {
            return arbol[i];
          }
        } else if(atributo == "p") { // busqueda por padre
          if (arbol[i].valueParent == valor) {
            return arbol[i];
          }
        }
      }

      for(let i=0; i<arbol.length; i++) {
        if(arbol[i].children !== undefined) {
          objetoAux = this.buscarObjeto(arbol[i].children, valor, atributo);
          if (objetoAux != null) {
            objetoEncontrado = objetoAux;
          }
        }
      }

      return objetoEncontrado;
    },
    
    buscarPadres(objeto) {
      let padre = this.buscarObjeto(this.dataTree, objeto.parent, "p");
      if (padre != null) {
        this.ruta.push({name: padre.name, letter: padre.valueParent , value: padre.value });
        if(padre.name != this.ptoInicio) {
          this.buscarPadres(padre);
        }
      }

      return true;
    },
    
    armarArreglo() {
      let textRuta = '';
      let totalRecorrido = 0;
      this.ruta = [];
      let final = this.buscarObjeto(this.dataTree, this.ptoFin, "n");
      this.ruta.push({ name: final.name, letter: final.valueParent , value: final.value });
      this.buscarPadres(final);
      this.ruta = this.ruta.reverse();
      console.log(this.ruta, "routes")
      this.ruta.forEach((element) => {
          textRuta += element.name + " - ";
          totalRecorrido += element.value;
      })
      this.ruta = 'Recorrido: ' + textRuta.slice(0,-2) + 'Recorrido Total: ' + totalRecorrido + ' m '
      
    }
  }
}
</script>
<!-- ESTILOS CSS -->
<style lang="css"> 
* {margin: 0; padding: 0;font-size: 16px!important;}

.contenedor{
  display: flex;
  flex-direction: column;
}

footer{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #111;
    height: auto;
    width: 100vw;
    font-family: "Open Sans";
    padding-top: 40px;
    color: #fff;
}

.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.footer-content h2{
    font-size: 20px;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
}
.footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
}
.footer-bottom{
    background: #000;
    width: 100vw;
    padding: 20px 0;
    text-align: center;
}
.footer-bottom p{
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
}

.tree ul {
	padding-top: 20px; position: relative;
	
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
}
.tree li {
	float: left; text-align: center;
	list-style-type: none;
	position: relative;
	padding: 20px 5px 0 5px;
	
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
}
.tree li::before, .tree li::after{
	content: '';
	position: absolute; top: 0; right: 50%;
	border-top: 2px solid #ccc;
	width: 50%; height: 20px;
}
.tree li::after{
	right: auto; left: 50%;
	border-left: 2px solid #ccc;
}
.tree li:only-child::after, .tree li:only-child::before {
	display: none;
}
.tree li:only-child{ padding-top: 0;}
.tree li:first-child::before, .tree li:last-child::after{
	border: 0 none;
}
.tree li:last-child::before{
	border-right: 2px solid #ccc;
	border-radius: 0 5px 0 0;
	-webkit-border-radius: 0 5px 0 0;
	-moz-border-radius: 0 5px 0 0;
}
.tree li:first-child::after{
	border-radius: 5px 0 0 0;
	-webkit-border-radius: 5px 0 0 0;
	-moz-border-radius: 5px 0 0 0;
}
.tree ul ul::before{
	content: '';
	position: absolute; top: 0; left: 50%;
	border-left: 2px solid #ccc;
	width: 0; height: 20px;
}

.tree li a{

	padding: 5px 10px;
	text-decoration: none;
	color: #666;
	font-family: arial, verdana, tahoma;
	font-size: 11px;
	display: inline-block;
	
	border-radius: 5px;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
}
.tree li a:hover, .tree li a:hover+ul li a {
	background: #c8e4f8; color: #000;
}
.tree li a:hover+ul li::after, 
.tree li a:hover+ul li::before, 
.tree li a:hover+ul::before, 
.tree li a:hover+ul ul::before{
	border-color:  #94a0b4;
}
</style>