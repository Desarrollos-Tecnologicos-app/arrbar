import { IInventory } from "./inventory.interface"

export interface IProductPcTech {
    inventario?: IInventory[],
    totalinventario?: Number,
    moneda?: String,
    descripcion?: String,
    sku?: String,
    id_seccion?: Number,
    peso_bruto?: Number,
    id_linea?: Number,
    ancho?: Number,
    promo?: Boolean,
    skuFabricante?: String,
    marca?: String,
    serie?: String,
    seccion?: String,
    id_marca?: Number,
    id_serie?: Number,
    alto?: Number,
    volumen?: Number,
    precio?: Number,
    precioMXN?: Number,
    upc?: String,
    largo?: Number,
    peso_neto?: Number,
    linea?: String
    origin: String
}

export interface categoriaSYSCOM {
    id: String,
    nombre: String,
    nivel: Number
}

export interface existenciaSYSCOM {
    nuevo? : Number,
    asterisco?: {
        e?: Number | String | null
    }
}

interface unidadMediaSYSCOM {
    codigo_unidad: String,
    nombre: String,
    clave_unidad_sat?: String
}

interface preciosSYSCOM {
    precio_1?: String,
    precio_especial?: String,
    precio_descuento?: String,
    precio_lista?: String
}

interface imagenesSYSCOM {
    imagen?: String,
    orden?: String
}

interface recursosSYSCOM {
    recurso?: String,
    path?: String
}

export interface IProductSYSCOM {
    producto_id: String,
    modelo?: String,
    total_existencia?: Number,
    titulo?: String,
    marca?: String,
    sat_key?: String,
    img_portada?: String,
    link_privado?: String,
    categorias?: categoriaSYSCOM[] | String,
    pvol?: String,
    marca_logo?: String,
    link?: String,
    descripcion?: String,
    iconos?: [] | null,
    peso?: String,
    existencia?: existenciaSYSCOM[] | Number
    unidad_de_medida?: unidadMediaSYSCOM,
    alto?: String,
    largo?: String,
    ancho?: String,
    precios?: preciosSYSCOM | Number,
    caracteristicas?: String[],
    imagenes?: imagenesSYSCOM[],
    recursos?: recursosSYSCOM[]
    origin: String
}

