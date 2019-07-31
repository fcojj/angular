class Negociacao {

    constructor(data, quantidade, valor) {
        // "_" significa que é privado o atributo
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(){
        return this._data;
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}