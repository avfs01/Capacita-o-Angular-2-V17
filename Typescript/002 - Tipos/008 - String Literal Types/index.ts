// String literal types são tipos que aceitam apenas valores de string especificados.

// Sintaxe:

type Direcao = "cima" | "baixo" | "esquerda" | "direita";
type Cor = "vermelho" | "verde" | "azul";

let mouseEvent: "click" | "doubleClick"; // strings especificas que mouseEvent irá aceitar

mouseEvent = "click"; // click está definida.

mouseEvent = "doubleClick"; // também está especificada

// mouseEvent = "DOUBLECLICK"; // case sensitive, logo, retorna erro