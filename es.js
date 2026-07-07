/* Spanish translation — Atlas de Rutas Migratorias */
window.I18N_ES={
ui:{
 title:"🌍 Rutas migratorias humanas del mundo",
 intro:"Un atlas satelital y topográfico interactivo de los principales corredores de migración irregular del mundo. Haz clic en una ruta para acercarte y explorar su geografía, cruces fronterizos, bloqueos y desvíos — y seguir el viaje de una persona. <b style=\"color:var(--ink)\">Líneas continuas</b> = rutas principales; <b style=\"color:var(--ink)\">líneas discontinuas</b> = desvíos tomados cuando el camino principal está bloqueado. Acércate donde quieras: la vista satelital es imagen real, hasta las vallas, puertos y senderos individuales.",
 back:"← Todas las rutas", secOverview:"Panorama general", secTerrain:"⛰ El terreno", secCross:"📍 Cruces y puntos clave", secBlock:"🚧 Bloqueos y desvíos", secJourney:"🧍 Un viaje",
 rerouteTag:"↪ desvío (discontinuo en el mapa)", rerouteTip:"↪ DESVÍO: ", reroutePop:"↪ Desvío: ", from:"· de ",
 storyFoot:"Esta persona es un personaje compuesto ficticio; todas las prácticas descritas están documentadas en esta ruta (OIM, ACNUR, MMC, HRW, prensa).",
 listFoot:"<b>Sobre las historias:</b> cada persona retratada aquí es ficticia — un personaje compuesto construido a partir de reportajes y datos documentados de la OIM, ACNUR, el Mixed Migration Centre, Human Rights Watch y periodistas que cubren estas rutas. Los hechos descritos (campos de secuestro y rescate, devoluciones en caliente, embarcaciones a la deriva, expulsiones al desierto) son prácticas documentadas.<br><br><b>Datos:</b> Matriz de Seguimiento de Desplazamientos de la OIM (Panorama Global de Rutas Migratorias 2025; Informe de Movilidad sobre la Escalada en Oriente Medio R17, junio de 2026), ACNUR, Frontex, Mixed Migration Centre, Caminando Fronteras. Las cifras son estimaciones y cambian constantemente.<br><br><b>Cómo usarlo:</b> haz clic en cualquier ruta (en esta lista o en el mapa) para acercarte. Haz clic en los marcadores ● para ver los detalles de cada cruce, y en las líneas discontinuas para las explicaciones de los desvíos. La vista satelital muestra imágenes reales — acércate al máximo a un cruce (el puerto de Lampedusa, la valla de Melilla, el campamento de Zaatari) para ver el terreno real. Cambia a OpenTopoMap (arriba a la derecha) para ver el relieve sombreado de montañas y desiertos.",
 legend:["Ruta principal","Desvío cuando hay bloqueo","Ramal / variante","Cruce fronterizo / punto de paso"],
 progress:"📚 Rutas exploradas: {n} de {t}", progressDone:" — ¡completo!"
},
terrain:[
 [23.5,6,"S A H A R A"],[18.3,11.3,"Ténéré"],[13.6,41.2,"Desierto de Danakil"],
 [31.9,-112.6,"Desierto de Sonora"],[8.15,-77.55,"Selva del Darién"],[33,47.5,"Montes Zagros"],
 [38.9,42.2,"Altiplano de Anatolia Or."],[44.35,16.35,"Alpes Dináricos"],[31.3,-6.3,"Montes Atlas"],
 [12.58,43.3,"Bab el-Mandeb"],[36.4,-3.6,"Mar de Alborán"],[35.9,-5.55,"Estrecho de Gibraltar"],
 [34.6,13.5,"Mar Mediterráneo"],[23,-19.5,"Océano Atlántico"],[10.5,94.3,"Mar de Andamán"],
 [9.5,39.6,"Altiplano Etíope"],[15.2,44.3,"Tierras Altas de Yemen"],[-22.4,29.4,"Río Limpopo"],
 [-12,34.4,"Lago Malaui"],[26.5,3,"Tanezrouft"],[14.5,-0.5,"S A H E L"],
 [33.95,36.15,"Antilíbano"],[32.9,38.2,"Desierto Sirio (Badia)"],
 [34.5,54.5,"Dasht-e Kavir"],[30.5,58.5,"Desierto de Lut"]
],
routes:[
{
name:"África Occidental → Islas Canarias (Ruta Atlántica)",
distance:"100–1.700 km de océano abierto (según el punto de salida)", duration:"2–10+ días en el mar",
stats:[["Llegadas may–ago 2025","1.602 (–83% vs 2024, tras las patrullas UE–Mauritania–Senegal)"],["Muertos/desaparecidos 2025","207 confirmados; ONG estiman 1.400–1.900"],["Principales orígenes","Malí, Senegal, Guinea"]],
overview:"La ruta marítima más mortífera hacia Europa. Cayucos de madera (canoas de pesca) y pateras salen de las playas de Senegal, Gambia, Mauritania y el Sáhara Occidental hacia las Islas Canarias españolas. Desde el Sáhara Occidental la travesía es de ~100 km; desde Senegal supera los 1.500 km contra las corrientes atlánticas. Las embarcaciones que no alcanzan las islas quedan a la deriva en el océano abierto — algunas han aparecido meses después frente a Brasil y el Caribe.",
terrain:"Atlántico abierto: oleaje de 2–4 m, la fría Corriente de Canarias que empuja las embarcaciones al suroeste, lejos de tierra, sin refugio ni agua dulce. Antes de embarcar, muchos cruzan el desierto del Sáhara occidental para llegar a Nuadibú o Dajla.",
blockage:"Las redadas de Mauritania y Marruecos (patrullas financiadas por la UE, deportaciones, expulsiones al desierto) empujaron las salidas hacia el SUR, a Senegal y Gambia — haciendo el tramo marítimo 10 veces más largo y mucho más letal. Aproximadamente 1 de cada 5 personas que lo intentan desde Senegal no sobrevive, según las ONG de rescate españolas.",
altPaths:["Salida desde Mauritania (Nuadibú)","Travesía corta desde el Sáhara Occidental"],
reroutes:[{name:"Desplazamiento de las salidas hacia el sur (tras las redadas mauritanas y marroquíes)",reason:"La interceptación financiada por la UE en Nuadibú y Dajla obligó a los traficantes a zarpar desde Senegal/Gambia — un tramo oceánico de más de 1.500 km."}],
crossings:[
 {name:"Playas de Mbour / Kayar, Senegal",note:"Puntos de salida de cayucos; 100–200 personas por embarcación."},
 {name:"Nuadibú, Mauritania",note:"Núcleo histórico de salidas; fuertes interceptaciones y redadas de deportación desde 2024–25."},
 {name:"Dajla, Sáhara Occidental",note:"Salidas de pateras hacia Fuerteventura."},
 {name:"El Hierro, Canarias (llegada)",note:"La isla más occidental; principal punto de llegada 2024–25 al desviarse las embarcaciones para evitar patrullas."}
],
story:{who:"Fatoumata, 22 años — personaje compuesto ficticio",origin:"Malí central",
text:["Fatoumata dejó su aldea cerca de Mopti después de que hombres armados quemaran el mercado, y con él la tienda de su padre. En Dakar un intermediario le cobró 450 € y la envió a una playa de Mbour, donde 138 personas se adentraron en el agua a las 2 de la madrugada hacia un cayuco de madera construido para peces, no para pasajeros.","Al cuarto día el motor tragó combustible contaminado y se apagó. La corriente los arrastró hacia el oeste, lejos de tierra. El agua se racionaba a un tapón de botella, dos veces al día. Vio a dos hombres beber agua de mar y perder la razón. Siete personas murieron en la travesía; los vivos rezaron una oración y los entregaron al mar.","Al noveno día un avión de rescate español los avistó 80 km al sur de El Hierro. Salvamento Marítimo tardó nueve horas en llegar. Fatoumata espera ahora en un campamento en Tenerife — una de las aproximadamente cuatro de cada cinco personas que sobreviven a esta ruta."]}
},
{
name:"Sahel → Sáhara → Libia / Argelia",
distance:"≈2.500–3.000 km por tierra (Niamey → Trípoli)", duration:"2 semanas – varios meses (a menudo años, con detenciones)",
stats:[["Movimientos","Cientos de miles transitan por Agadez cada año"],["Muertes en el Sáhara","Se cree que superan los ahogamientos en el Mediterráneo (OIM)"],["Núcleo clave","Agadez, Níger"]],
overview:"El gran corredor terrestre que alimenta el Mediterráneo Central. Los africanos occidentales convergen en Agadez, Níger — la 'puerta del Sáhara' — y cruzan el desierto del Ténéré por Dirkou y Séguédine hasta la frontera de Tummo y de ahí a Sabha y Trípoli, en Libia. Un ramal occidental llega a Assamaka y Tamanrasset, en Argelia. Las camionetas llevan 25–30 personas cada una; los pasajeros se aferran a palos de madera para no caer — a quienes caen, a menudo los dejan atrás.",
terrain:"El Ténéré: un mar de arena de 1.300 km con dunas, sin agua, y temperaturas del suelo superiores a 50 °C. Una avería o un punto GPS equivocado es una sentencia de muerte. La ruta está salpicada de vehículos destruidos y tumbas someras.",
blockage:"La Ley 2015-36 de Níger (2015, respaldada por la UE) criminalizó el transporte de migrantes — no detuvo el movimiento: empujó los convoyes fuera de los pozos señalizados hacia pistas remotas, y las muertes en el Sáhara se multiplicaron por seis. La junta militar DEROGÓ la ley en noviembre de 2023; ahora salen de Agadez convoyes semanales escoltados por el ejército. Argelia, por su parte, expulsa masivamente a migrantes y los abandona en el 'Punto Cero' cerca de Assamaka, a 15 km del pueblo más cercano.",
altPaths:["Corredor de Kufra (desde Sudán/Chad)"],
reroutes:[
 {name:"Pistas remotas del Ténéré (2016–2023, bajo la Ley 2015-36)",reason:"La criminalización empujó a los traficantes fuera del eje principal de Dirkou hacia pistas desérticas sin señalizar, lejos de pozos y de todo rescate — las muertes se multiplicaron por seis."},
 {name:"Ramal de Argelia → expulsiones masivas de vuelta",reason:"Argelia deporta a decenas de miles y los abandona en el 'Punto Cero' del desierto; muchos caminan 15 km hasta Assamaka."}
],
crossings:[
 {name:"Agadez, Níger",note:"La capital migratoria del Sáhara. Convoyes semanales escoltados por el ejército desde la derogación de la Ley 2015-36 en 2023."},
 {name:"Puesto de control de Dirkou",note:"Oasis y punto de escala en la travesía del Ténéré."},
 {name:"Puesto fronterizo de Tummo (Níger→Libia)",note:"Frontera desértica remota; el control cambia entre grupos armados."},
 {name:"Sabha, Libia",note:"Núcleo tristemente célebre: los migrantes son vendidos, detenidos y extorsionados aquí de forma rutinaria."},
 {name:"Assamaka / 'Punto Cero' (Níger–Argelia)",note:"Donde Argelia abandona a los migrantes expulsados en pleno desierto."}
],
story:{who:"Emmanuel, 24 años — personaje compuesto ficticio",origin:"Benin City, Nigeria",
text:["Un reclutador en Benin City le prometió a Emmanuel trabajo de almacén en Libia, con sueldo en dólares. El autobús a Niamey fue legal y fácil. En Agadez esperó tres semanas en un recinto amurallado llamado 'gueto' hasta que salió el convoy del lunes — 26 hombres en la caja de una Hilux, cada uno aferrado a un palo de madera encajado en los rieles de carga. 'Si te duermes, te caes. Si te caes, nadie se detiene.'","Pasado Dirkou fue contando las cosas medio enterradas en la arena: neumáticos, la cabina de un camión, un zapato blanqueado por el sol. En Sabha el conductor no los llevó a un almacén — los vendió. Los milicianos grabaron en video a Emmanuel mientras lo golpeaban y le enviaron el video a su madre; ella pagó dos veces, 900.000 nairas, a través de un agente en una tienda de teléfonos.","Catorce meses después de salir de casa llegó a Trípoli, todavía endeudado, decidiendo ahora si el mar puede ser peor que el desierto. Sabe que puede serlo."]}
},
{
name:"Mediterráneo Central (Libia/Túnez → Italia/Grecia)",
distance:"190–350 km de mar abierto", duration:"12–60 horas",
stats:[["Llegadas a Italia 2025","Libia reemergió como principal punto de salida (+69%)"],["Muertes en el Mediterráneo 2025","1.700+ (OIM)"],["Nuevo corredor","Tobruk → Creta +260% en 2025"]],
overview:"El tramo más letal del mar más mortífero del mundo. Embarcaciones de goma y de acero salen de Zuwara y Garabulli (Libia) y de Sfax (Túnez) hacia Lampedusa y Sicilia. En 2025 explotó un nuevo corredor: barcos más grandes desde Tobruk, en el este de Libia, recorriendo 350 km hasta Creta, con un aumento del 260%. Las salidas desde Libia subieron un 69% al endurecerse Túnez.",
terrain:"Mediterráneo abierto. Las lanchas de goma llevan a más de 40 personas sobre 10 m de tubo inflable; un cambio de viento las hunde. Las rutas marítimas del Canal de Sicilia ofrecen posibilidades de rescate — la travesía a Creta cruza aguas mucho más vacías.",
blockage:"Las interceptaciones de la guardia costera libia, financiada por la UE, devuelven a las personas a centros de detención libios (tortura y extorsión documentadas). La represión tunecina de 2023–25 y las expulsiones al desierto empujaron las salidas de vuelta a Libia, y hacia el este, al nuevo corredor Cirenaica→Creta — más largo, pero menos patrullado.",
altPaths:["Túnez → Lampedusa","Libia Or. → Creta (nuevo corredor 2025)"],
reroutes:[{name:"Desplazamiento al este: Tobruk → Creta",reason:"Las interceptaciones frente a Trípoli/Túnez empujaron a los traficantes al este de Libia; las detecciones en el corredor de Creta subieron un 260% en 2025."}],
crossings:[
 {name:"Zuwara, Libia",note:"Puerto histórico de tráfico al oeste de Trípoli."},
 {name:"Sfax, Túnez",note:"Núcleo de salidas; escenario de redadas y expulsiones al desierto en 2023–25."},
 {name:"Lampedusa, Italia (llegada)",note:"Isla diminuta más cercana a África que a Sicilia; centro de recepción."},
 {name:"Tobruk, Libia Or.",note:"Punto de salida del nuevo corredor de largo alcance hacia Creta."},
 {name:"Creta / Gavdos, Grecia (llegada)",note:"Detecciones al alza: +260% en 2025."}
],
story:{who:"Yusuf, 31 años — personaje compuesto ficticio",origin:"El Fasher, Darfur, Sudán",
text:["Yusuf sobrevivió al asedio de El Fasher dejándolo todo: la farmacia donde trabajaba, la tumba de su madre, la ciudad misma. Cruzó a Libia por el desierto de Kufra con otros darfuríes, y pasó cinco meses en un almacén de Ajdabiya pagando con trabajo una 'deuda de transporte' que nunca aceptó.","En Tobruk los traficantes cargaron a 90 personas en un pesquero de acero para la nueva travesía larga hacia Creta — 350 km, sin chalecos salvavidas, con la guardia costera libia pagada para mirar a otro lado, o eso decía el intermediario. A las treinta horas el tiempo cambió; las olas rompían sobre la proa y la gente ataba a los niños a las barandillas del mástil.","Un guardacostas griego los alcanzó frente a Gavdos. La entrevista de asilo de Yusuf es dentro de once meses. A quien se lo pregunta le muestra la foto de su farmacia, con azulejos color menta. 'Yo no migré', dice. 'Nadie me evacuó, así que me evacué yo mismo.'"]}
},
{
name:"Mediterráneo Occidental (Marruecos/Argelia → España)",
distance:"14 km (Estrecho de Gibraltar) – 200 km (Mar de Alborán)", duration:"4–30 horas",
stats:[["Tendencia 2025","Flujos +35% (sobre todo desde Argelia); muertes –73%"],["Vallas","Ceuta y Melilla: vallas triples de 6–10 m"],["Melilla, junio 2022","≥23 muertos en un cruce masivo de la valla"]],
overview:"Tres vías de entrada a España: los 14 km del Estrecho de Gibraltar; el Mar de Alborán desde Argelia hasta Almería; y las vallas terrestres de Ceuta y Melilla — las únicas fronteras terrestres de Europa con África, rodeadas de barreras de 6–10 m, concertinas y torres de vigilancia.",
terrain:"El Estrecho es corto pero traicionero: tráfico marítimo, niebla y el choque de las corrientes atlántica y mediterránea. Los viajeros subsaharianos cruzan antes las montañas del Atlas y viven a la intemperie en campamentos del bosque (Gurugú) esperando intentar las vallas.",
blockage:"El refuerzo de las vallas tras la tragedia de Melilla de junio de 2022 (≥23 muertos en un cruce masivo) empujó el movimiento hacia el mar. La cooperación marroquí con España desplazó las salidas al este, hacia Argelia: el corredor Argelia→Almería/Murcia es ahora el canal principal, con flujos al alza del 35% en 2025.",
altPaths:["Estrecho de Gibraltar","Argelia → Almería (corredor principal 2025)"],
reroutes:[{name:"De las vallas al Mar de Alborán",reason:"Tras la tragedia de Melilla de 2022 y el endurecimiento de las vallas, los intentos se desplazaron a las travesías marítimas desde Argelia."}],
crossings:[
 {name:"Valla de Melilla (enclave español)",note:"Valla triple de 6–10 m; escenario del desastre de junio de 2022. Acércate — la línea de la valla se ve desde el satélite."},
 {name:"Valla de Ceuta (enclave español)",note:"Barrera del enclave gemelo sobre el Estrecho."},
 {name:"Tánger, Marruecos",note:"Salidas a través de los 14 km del Estrecho."},
 {name:"Orán, Argelia",note:"Principal zona de salida 2025 hacia Almería/Murcia."},
 {name:"Almería, España (llegada)",note:"Llegadas por el Mar de Alborán."}
],
story:{who:"Ibrahim, 23 años — personaje compuesto ficticio",origin:"Conakri, Guinea",
text:["Ibrahim pasó ocho meses en el monte Gurugú, en los campamentos del bosque sobre Melilla, comiendo lo que el grupo lograba reunir y observando la valla triple con unos binoculares que alguien había cambiado por un teléfono. La intentó dos veces. La primera, la concertina le arrancó la piel de ambas palmas; la segunda, las fuerzas auxiliares marroquíes desmantelaron el campamento al amanecer y los llevaron en autobús 300 km al sur.","Después del cruce masivo de 2022 — perdió a un amigo sudanés en la avalancha de la puerta — dejó de creer en la valla. Trabajó un año en la construcción en Orán para pagarse un lugar en una lancha de fibra de vidrio: 190 km por el Mar de Alborán, doce personas, una brújula.","El mar estaba en calma, lo que él llama la única suerte de su vida. Un pesquero frente a Almería llamó al servicio de rescate. 'La valla es un muro', dice. 'El mar es una puerta que a veces se abre.'"]}
},
{
name:"Asia Menor → Mediterráneo Oriental → Balcanes",
distance:"≈5.000+ km (Kabul → Trieste)", duration:"6 meses – 3 años",
stats:[["Cruces Med. Oriental 2025","≈46.200 (–30%)"],["Balcanes Occ. 2025","–42% (fuerte control)"],["Principales orígenes","Afganistán, Siria, Pakistán"]],
overview:"El gran puente terrestre de Asia a la UE. Los afganos cruzan los desiertos de Irán y los pasos del Zagros, y luego la militarizada frontera Irán–Turquía cerca de Van (muro, drones, torres de vigilancia). Desde Turquía: lanchas de goma por el Egeo hasta las islas griegas, o el río Evros por tierra. Después, al norte por los Balcanes — donde cada frontera cerrada ha engendrado un desvío: la valla húngara de 2015 empujó la ruta por Croacia, y luego por Bosnia, donde los intentos de cruce se conocen simplemente como 'el juego'.",
terrain:"Cruces de alta montaña (el Zagros; los pasos de 3.000 m alrededor de Van, letales en invierno), el frío y rápido río Evros, el Egeo en lanchas sobrecargadas, y después los Alpes Dináricos entre Bosnia y Croacia.",
blockage:"Bloqueos en capas: los muros fronterizos de Irán y Turquía → los traficantes usan pasos más altos y más fríos. Las devoluciones en caliente en el Egeo por unidades enmascaradas → desplazamiento a la ruta terrestre del Evros y a barcos más grandes directos a Italia. La valla de Hungría (2015) → desvío por Croacia y Bosnia (Bihać), donde la gente intenta 'el juego' decenas de veces contra devoluciones documentadas.",
altPaths:["Ramal marítimo del Egeo (İzmir → Lesbos → Atenas)"],
reroutes:[{name:"Desvío por Bosnia — 'el juego'",reason:"La valla fronteriza húngara de 2015 en Röszke cerró el camino directo; la ruta se dobló al oeste por Bosnia (Bihać) y los Alpes Dináricos hacia Croacia, contra devoluciones sistemáticas."}],
crossings:[
 {name:"Zaranj (Afganistán→Irán)",note:"Cruce del desierto de Nimruz; principal salida afgana."},
 {name:"Van (Irán→Turquía)",note:"Muro fronterizo, drones; cruces nocturnos de montaña a 2.500–3.000 m."},
 {name:"Río Evros (Turquía→Grecia)",note:"Valla de acero y devoluciones documentadas; río frío y rápido."},
 {name:"Lesbos, Grecia",note:"Llegadas a las islas del Egeo; se reportan devoluciones en el mar."},
 {name:"Röszke (Serbia→Hungría) — BLOQUEADO",note:"Doble valla de 4 m desde 2015; forzó el desvío por Bosnia."},
 {name:"Bihać, Bosnia",note:"Ciudad de partida para 'el juego' a través de los Alpes Dináricos hacia Croacia."},
 {name:"Trieste, Italia (llegada)",note:"Final del corredor balcánico para muchos."}
],
story:{who:"Zahra, 16 años — personaje compuesto ficticio",origin:"Ghazni, Afganistán (hazara)",
text:["La familia de Zahra dejó Ghazni el año en que las escuelas se cerraron para ella. La ruta del traficante pasaba por Zaranj, cruzaba Irán en maleteros de coches y casas de seguridad, y luego las montañas sobre Van, de noche — en fila india, sin luces, en febrero. Los zapatos de su hermano pequeño se congelaron pegados a sus pies; un hombre de Herat lo cargó las últimas cuatro horas.","El Egeo requirió dos intentos. La primera lancha fue detenida por hombres enmascarados que se llevaron el motor y los remolcaron de vuelta hacia Turquía. En el segundo intento, la familia cambió al río Evros — con el agua a la cintura, agarrados a una cuerda, los teléfonos en bolsas de plástico.","Luego los Balcanes: catorce meses, seis intentos de 'el juego' desde Bihać a través de las montañas, dos veces devueltos a pie por la policía croata, una vez asaltados. Al séptimo intento caminaron 11 días hasta Trieste. Zahra vuelve a ir a la escuela, en Italia. Viaje total: 26 meses, unos 5.400 km — una distancia que un avión cubre en siete horas."]}
},
{
name:"Siria ⇄ Jordania, Líbano y Turquía (campamentos y retornos de 2025)",
distance:"50–900 km por tierra; la mayoría huye a menos de 200 km", duration:"Horas–días para cruzar; el desplazamiento se mide en décadas",
stats:[["Desplazamiento máximo","6,8M refugiados + 7,2M desplazados internos — la mayor crisis del mundo"],["Retornos desde dic. 2024","1,2M+ refugiados y 1,9M desplazados internos (ACNUR)"],["Aún acogidos","Turquía ≈2,7M; Líbano y Jordania millones, incl. el campamento de Zaatari"]],
overview:"La guerra que comenzó en 2011 produjo la mayor crisis de refugiados del mundo — y su geografía contradice la imagen popular: la gran mayoría de los sirios nunca fue a Europa. Cruzaron la frontera más cercana: a los campamentos de Zaatari y Azraq en el desierto jordano, a los asentamientos informales de tiendas del valle de la Becá en Líbano (Líbano acogió más refugiados per cápita que ningún otro país del planeta), y a Turquía, el mayor país de acogida (~3M). Este corredor también alimenta la ruta del Mediterráneo Oriental hacia la UE. Desde la caída del gobierno de Asad en diciembre de 2024, las flechas se han invertido: más de 1,2 millones de refugiados han regresado — el mayor movimiento de retorno espontáneo de la historia — aunque muchos encuentran escombros, munición sin explotar y ningún servicio donde antes estaba su casa.",
terrain:"Cruces cortos pero duros: los senderos de contrabando de las montañas del Antilíbano y el Qalamún hacia Arsal; el terraplén desértico de la frontera jordana donde el campamento de Rukban quedó varado durante años; el muro fronterizo de hormigón de 900 km de Turquía. Zaatari es en sí una ciudad en el desierto: 80.000 personas, con su propia calle comercial, doce años de existencia.",
blockage:"Cada país vecino fue cerrando progresivamente: Líbano restringió la entrada en 2015; Jordania selló el terraplén tras un atentado en 2016, dejando a ~50.000 personas varadas en Rukban, en tierra de nadie, durante años; Turquía terminó su muro y empujó los cruces a los senderos de montaña de los contrabandistas. El gran desvío de 2025 es hacia casa — retornos desde Zaatari (≈170.000 desde Jordania) y la Becá (más de 500.000 salieron de Líbano en 2025), limitados por las viviendas destruidas y los campos minados. Actualización de la escalada de junio de 2026: las hostilidades vinculadas a Irán desplazaron a 704.445 personas dentro del Líbano (523.249 habían regresado al 24 de junio), y se registraron 464.562 movimientos del Líbano hacia Siria entre marzo y junio — este corredor ahora fluye en ambas direcciones a la vez.",
altPaths:["A Líbano (valle de la Becá / Beirut)","Sendero de contrabando del Qalamún (Arsal)","A Turquía (Alepo → Bab al-Hawa → Gaziantep)"],
reroutes:[
 {name:"Terraplén de Rukban — frontera BLOQUEADA",reason:"Jordania selló la frontera tras un atentado en 2016; ~50.000 personas quedaron varadas durante años en la tierra de nadie de Rukban casi sin ayuda."},
 {name:"Flujos de RETORNO 2025 (post-Asad)",reason:"Desde diciembre de 2024, más de 1,2M de refugiados han cruzado de vuelta — desde Zaatari por Nasib, y desde la Becá por Masnaa — el mayor movimiento de retorno de la historia moderna."}
],
crossings:[
 {name:"Campamento de Zaatari, Jordania",note:"Abierto en 2012; llegó a 150.000 personas — una ciudad en el desierto con su propia calle de mercado. ~170.000 han regresado desde Jordania desde dic. 2024."},
 {name:"Cruce de Nasib / Jaber (Siria–Jordania)",note:"Principal puesto fronterizo; la ruta tanto del éxodo de 2012–16 como de los retornos de 2025."},
 {name:"Cruce de Masnaa (Siria–Líbano)",note:"Autopista Beirut–Damasco; principal cruce formal hacia Líbano."},
 {name:"Asentamientos del valle de la Becá, Líbano",note:"En Líbano no hay campamentos formales — cientos de asentamientos informales de tiendas entre los cultivos; la región con mayor densidad de refugiados del planeta."},
 {name:"Arsal, Líbano",note:"Cruce de contrabando de montaña por el Qalamún; acogió a más de 100.000 personas en campamentos de inviernos crudos."},
 {name:"Rukban (el terraplén) — BLOQUEADO",note:"Campamento en tierra de nadie donde ~50.000 quedaron varados cuando Jordania selló la frontera en 2016; vaciado finalmente después de 2024."},
 {name:"Bab al-Hawa (Siria–Turquía)",note:"Línea de vida humanitaria hacia el noroeste; el muro fronterizo turco de 900 km corre a ambos lados."}
],
story:{who:"Rania, 38 años — personaje compuesto ficticio",origin:"Deraa, Siria",
text:["Rania salió de Deraa en 2013 con tres hijos y una bolsa de plástico con documentos, caminando el último tramo hasta la frontera jordana de noche porque la carretera estaba bajo fuego de francotiradores. Zaatari era entonces una cuadrícula de tiendas en el desierto pelado; a lo largo de doce años lo vio convertirse en una ciudad — caravanas, una calle de mercado que los refugiados apodaron los Campos Elíseos, la infancia entera de su hija. Su esposo se fue en la dirección contraria en 2015, por la ruta del Egeo hacia Alemania; el expediente de reunificación familiar sobrevivió a dos trabajadores sociales.","En diciembre de 2024 el campamento pasó la noche en vela mirando los teléfonos: el gobierno había caído. Ella esperó a que pasara el invierno — 'no sobrevives doce años siendo la primera' — y cruzó de vuelta por Nasib en la primavera de 2025 con una ayuda de retorno de ACNUR.","Su casa en Deraa es un cascarón con cielo por techo; el campo de atrás está marcado con cinta roja por las minas. Su hijo menor, nacido en Zaatari, sigue llamando 'casa' al campamento. Rania reconstruye una habitación a la vez. 'Nunca fuimos migrantes', dice. 'Éramos vecinos que tocaron una puerta y esperaron doce años para volver a casa caminando.'"]}
},
{
name:"Cuerno de África → Yemen → Arabia Saudita (Ruta Oriental)",
distance:"≈2.000–2.500 km (altiplano etíope → frontera saudita)", duration:"1–6 meses",
stats:[["Movimientos 2025","506.000+ (+18%) — la ruta mixta más transitada del mundo"],["Muertos/desaparecidos 2025","922 — el año más mortífero registrado"],["Principales orígenes","Etiopía (Oromia, Amhara), Somalia"]],
overview:"El corredor irregular más transitado del mundo, y uno de los menos cubiertos por la prensa. Etíopes y somalíes caminan por el desierto de Danakil hasta Obock, Yibuti, cruzan el Golfo de Adén / estrecho de Bab el-Mandeb en dhows sobrecargados, y luego recorren todo Yemen, en guerra, para intentar la frontera saudita — donde Human Rights Watch ha documentado disparos de los guardias fronterizos contra migrantes. Muchos son retenidos para pedir rescate en Yemen, en campos de tortura dirigidos por traficantes.",
terrain:"El Danakil es uno de los lugares más calurosos de la Tierra — más de 45 °C, con tormentas de arena que ciegan y desorientan a los caminantes. Después, una travesía marítima nocturna de 30–115 km, y luego las montañas occidentales de Yemen hasta la frontera de Saada, a 2.000 m.",
blockage:"Los puestos de control policiales en Yibuti empujaron a los traficantes a puntos de embarque costeros más remotos (un factor clave de los ahogamientos récord de 2025). La valla fronteriza saudita y su control letal hacen retroceder a muchos hacia Yemen, donde quedan varados; decenas de miles aceptan los vuelos de retorno voluntario de la OIM desde Adén.",
altPaths:["Ramal de Somalilandia (Bosaso → costa de Shabwah)"],
reroutes:[{name:"Embarques remotos en la costa de Yibuti",reason:"La evasión de controles desplazó las salidas a playas aisladas con embarcaciones más pequeñas y peores — un factor clave en las 922 muertes récord de 2025."}],
crossings:[
 {name:"Obock, Yibuti",note:"Principal playa de embarque para la travesía del Golfo de Adén."},
 {name:"Estrecho de Bab el-Mandeb",note:"'La Puerta de las Lágrimas' — travesías nocturnas en dhows sobrecargados; los traficantes obligan a los pasajeros a tirarse al agua cerca de la costa."},
 {name:"Adén, Yemen",note:"Centro de tránsito de la OIM; vuelos de retorno voluntario asistido."},
 {name:"Saada, Yemen",note:"Zona de preparación para el intento de cruce a Arabia Saudita, en plena zona de guerra."},
 {name:"Frontera saudita (sector de Jizan)",note:"Vallada y patrullada; disparos contra migrantes documentados por HRW."}
],
story:{who:"Bilal, 17 años — personaje compuesto ficticio",origin:"Zona de Arsi, Oromia, Etiopía",
text:["La sequía mató al ganado y el conflicto se llevó la cosecha, así que Bilal echó a andar. Quince días desde Arsi hasta Obock, el último tramo por el Danakil, donde el agua del intermediario se acabó un día antes de lo previsto y el grupo lamió al amanecer la condensación del tanque de un camión cisterna.","El dhow cruzó de noche, 160 personas apretadas rodilla contra espalda. Cerca de la costa yemení los traficantes obligaron a todos a lanzarse al agua profunda para evitar las patrullas; Bilal no sabe nadar y vivió porque un somalí le empujó un bidón a los brazos. Otros no.","En Lahj, los traficantes lo retuvieron en un recinto que llaman hosh, telefoneando a su madre mientras lo golpeaban. Ella vendió el último buey para su liberación. En la frontera de Saada el grupo se dispersó bajo los disparos desde la loma; Bilal dio la vuelta. Ahora está en el centro de la OIM en Adén, con diecisiete años, pidiendo un vuelo a casa — de regreso por el país que estuvo a punto de matarlo dos veces."]}
},
{
name:"Sudamérica → Tapón del Darién → Panamá (y la reversión de 2025)",
distance:"≈97–110 km de selva sin caminos (el Tapón en sí)", duration:"3–10 días a pie",
stats:[["Cruces en el pico de 2023","520.000+ (82.000 en un solo mes)"],["May–ago 2025","solo 37 tránsitos (frente a 98.918 en 2024)"],["Reversión 2025","≈14.000 viajaron hacia el SUR en lancha costera (feb–ago)"]],
overview:"La única interrupción de la Carretera Panamericana: más de 100 km de selva tropical montañosa entre Colombia y Panamá sin ninguna carretera. En su pico de 2023, más de medio millón de personas — en su mayoría venezolanas — lo cruzaron a pie. Después de que EE. UU. cerrara el acceso al asilo a comienzos de 2025 y Panamá sellara los senderos, los cruces se desplomaron un 99,98%… y la ruta se invirtió: miles empezaron a viajar hacia el SUR, pagando pasajes en lancha por las costas caribeña y pacífica de Panamá para volver a Colombia sin volver a entrar en la selva.",
terrain:"Selva de triple dosel, barro hasta la rodilla, la subida del Filo del Muerto, y ríos que crecen de golpe en minutos y arrasan campamentos. Sin asentamientos, sin rescate. Grupos armados controlan el lado colombiano.",
blockage:"El cierre del asilo en EE. UU. + el cierre de senderos panameños (2025) no terminaron con el movimiento — lo invirtieron. Los migrantes que van al sur evitan la selva por mar: lanchas caribeñas desde Colón hacia Puerto Obaldía y Capurganá, y una ruta pacífica vía Jaqué hasta Buenaventura que se disparó y luego colapsó tras naufragios y redadas.",
altPaths:[],
reroutes:[
 {name:"Ruta INVERSA en lancha por el Caribe (hacia el sur, 2025)",reason:"Con la frontera de EE. UU. cerrada, los migrantes varados pagaron ≥230 $ por lanchas que bajan por la costa de Guna Yala de regreso a Colombia — evitando la selva por mar."},
 {name:"Ruta INVERSA por el Pacífico (se disparó y luego desapareció)",reason:"Lanchas por el Pacífico vía Jaqué hacia puertos colombianos; los naufragios y los controles la terminaron en pocos meses."}
],
crossings:[
 {name:"Necoclí, Colombia",note:"Pueblo de playa donde comenzaban los viajes hacia el norte — y donde termina la ruta inversa de 2025."},
 {name:"Capurganá / Acandí",note:"Últimos pueblos colombianos antes de los senderos de la selva."},
 {name:"Bajo Chiquito, Panamá",note:"Primer poblado después del Tapón; comunidad emberá convertida en punto de recepción."},
 {name:"Campamento de Lajas Blancas",note:"Estación migratoria gubernamental; prácticamente vacía a mediados de 2025."},
 {name:"Puerto Obaldía",note:"Punto caribeño de la ruta en lancha hacia el sur."}
],
story:{who:"Mariángel, 29 años — personaje compuesto ficticio",origin:"Maracay, Venezuela",
text:["Mariángel, enfermera, cruzó el Darién hacia el norte en 2023 con su hija de seis años. Recuerda la selva en detalles que raciona: la cuerda tendida en el cruce del río, el hombre que se sentó en el Filo del Muerto y no quiso levantarse, su hija preguntando por qué las tiendas junto al sendero no tenían gente.","Esperaron dos años en México una cita de asilo por CBP One. En enero de 2025 la aplicación se apagó; su número de caso simplemente dejó de existir. Ir al norte se había terminado. Volver por la selva era impensable.","Así que se unió a la reversión: autobuses hacia el sur por Centroamérica, y luego 260 $ por cabeza por una lancha desde la costa caribeña de Panamá — chalecos salvavidas solo para los niños — saltando por la costa de Guna Yala hasta Puerto Obaldía, y al final la playa de Necoclí. La misma playa. 'Dos años, once países', dice, 'y el mapa me devolvió a mis propias huellas.' Ahora está regularizando su situación en Colombia."]}
},
{
name:"Centroamérica → México → frontera de EE. UU.",
distance:"≈3.000–4.500 km (Guatemala → frontera de EE. UU.)", duration:"1–6 meses",
stats:[["Situación 2025","Cruces fronterizos en mínimos históricos; acceso al asilo cerrado"],["Zona más letal","Desierto de Sonora: cientos mueren de calor cada año"],["Peligro clave","Secuestro y extorsión de los cárteles en el norte de México"]],
overview:"Desde Centroamérica, cruzando el río Suchiate hacia México, y luego más de 3.000 km al norte — en autobús, a pie, o aferrados a los trenes de carga llamados La Bestia — hasta la frontera de EE. UU.: el Río Bravo en Texas, el desierto de Sonora en Arizona, los tramos de muro de California. En 2025 el acceso al asilo en EE. UU. quedó efectivamente cerrado; los cruces cayeron a mínimos históricos y cientos de miles quedaron varados en México.",
terrain:"El desierto de Sonora (temperaturas del suelo de más de 60 °C en verano; la zona migratoria terrestre más letal de América), el caudaloso Río Bravo, y los largos corredores ferroviarios a la intemperie donde las caídas de La Bestia se cobran extremidades.",
blockage:"La construcción sucesiva de muros y la estrategia de la Patrulla Fronteriza de 'Prevención mediante Disuasión' empujaron los cruces fuera de las ciudades hacia el desierto remoto — las muertes aumentaron durante 30 años. El cierre del asilo en 2025 bloqueó por completo el final de la ruta: muchos ahora piden refugio en México (COMAR) o se suman a la reversión hacia el sur.",
altPaths:["Ramal Pacífico/Sonora → desierto de Arizona","Ramal de Juárez → El Paso"],
reroutes:[{name:"Empujados al desierto de Sonora",reason:"Los muros y el control urbano desde los años 90 ('Prevención mediante Disuasión') desplazaron deliberadamente los cruces hacia el terreno letal del desierto alrededor de Sasabe y el Camino del Diablo."}],
crossings:[
 {name:"Río Suchiate (Guatemala→México)",note:"Cruces en balsa junto al puente oficial de Tapachula."},
 {name:"Paso Canoas (Panamá→Costa Rica)",note:"Principal cruce terrestre centroamericano."},
 {name:"Eagle Pass / Río Bravo",note:"Cruce del río; ahogamientos frecuentes."},
 {name:"Corredor de Sasabe, desierto de Sonora",note:"Cruce desértico remoto; la zona de entrada más letal a EE. UU."},
 {name:"Ciudad Juárez / El Paso",note:"Punto de cruce urbano; 2025: acceso al asilo cerrado."}
],
story:{who:"Carlos, 34 años — personaje compuesto ficticio",origin:"San Pedro Sula, Honduras",
text:["El 'impuesto de guerra' de la pandilla sobre la llantera de Carlos se duplicó al mes siguiente de que su hermano se negara a pagar el suyo; su hermano está muerto. Carlos cruzó el Suchiate en una balsa de cámaras de neumático y viajó al norte en La Bestia, durmiendo amarrado a la rejilla con un cinturón.","En Tamaulipas, hombres con radios lo bajaron de un autobús, lo retuvieron en una casa de seguridad con otros cuarenta, y le pusieron precio a su vida: 4.000 $ — su primo en Houston los envió en tres giros. Llegó al Río Bravo a fines de 2024, fue expulsado, y para cuando lo intentó de nuevo, el propio sistema de asilo había desaparecido.","Miró el mapa del desierto de Sonora, donde el grupo de ayuda a migrantes marca cada cuerpo recuperado con un punto rojo, y los puntos parecían un sarpullido sobre todo el estado. Decidió que no. Carlos está ahora en Monterrey, vaciando concreto, con su caso pendiente ante la agencia mexicana de refugiados. 'No dejé de correr', dice. 'Solo me quedé sin camino.'"]}
},
{
name:"Bahía de Bengala y Mar de Andamán (ruta rohinyá)",
distance:"≈1.800–3.200 km de mar", duration:"1–8 semanas (los barcos suelen quedar a la deriva)",
stats:[["Intentos 2025","6.500+ rohinyás por mar"],["Muertos/desaparecidos 2025","≈900 — 1 de cada 7; la mortalidad más alta del mundo"],["Abril 2026","≈250 desaparecidos en un solo naufragio"]],
overview:"Los refugiados rohinyás — un pueblo apátrida confinado en campamentos de Bangladés (Cox's Bazar, ~1 millón de personas) y en el estado de Rakáin en Myanmar — abordan pesqueros hacia Malasia o Indonesia. 2025 fue el año más mortífero jamás registrado: aproximadamente una de cada siete personas que intentaron la travesía murió o desapareció, la mortalidad más alta de cualquier ruta marítima del planeta. Los barcos están hechos para carga, se llenan en niveles como estanterías, y a menudo quedan semanas a la deriva cuando fallan los motores.",
terrain:"Más de 2.000 km de mar abierto gobernado por el monzón. Fuera de la ventana de navegación de noviembre a marzo, las tormentas son letales; dentro de ella, los barcos igual quedan a la deriva cuando la tripulación los abandona. Ningún Estado realiza búsqueda y rescate sistemáticos en el Mar de Andamán.",
blockage:"La ofensiva antitrata de Tailandia en 2015 cerró el viejo corredor terrestre por los campamentos de la selva tailandesa — ahora los barcos navegan rutas más largas directas a Indonesia/Malasia. Las devoluciones regionales ('ayudar y empujar') dejan a las embarcaciones a la deriva entre jurisdicciones durante semanas.",
altPaths:["A Malasia (Langkawi)","Desde Rakáin (Sittwe)"],
reroutes:[{name:"Ruta marítima larga (post-2015)",reason:"El cierre tailandés de los campamentos de tránsito en la selva acabó con el salto corto a la costa tailandesa; ahora los barcos hacen la travesía directa, mucho más larga, hasta Aceh — a menudo a la deriva cuando la tripulación los abandona."}],
crossings:[
 {name:"Cox's Bazar, Bangladés",note:"El mayor asentamiento de refugiados del mundo (~1M de rohinyás); embarques nocturnos desde playas cercanas."},
 {name:"Sittwe, Rakáin (Myanmar)",note:"Salidas desde zonas de campamentos de internamiento."},
 {name:"Islas Andamán (India)",note:"Donde suelen avistarse primero los barcos a la deriva."},
 {name:"Aceh, Indonesia (llegada)",note:"Los pescadores acehneses han remolcado repetidamente a tierra barcos a la deriva."},
 {name:"Langkawi, Malasia (llegada)",note:"Destino de reunificación familiar; los que llegan enfrentan detención."}
],
story:{who:"Noor, 20 años — personaje compuesto ficticio",origin:"Campamento de Kutupalong, Cox's Bazar (rohinyá)",
text:["Noor tenía diez años cuando su familia huyó de Rakáin; ha pasado la mitad de su vida dentro de un campamento del que no tiene permitido salir, en un país que no la cuenta como ciudadana, sin acceso a escuela formal ni trabajo. Cuando un incendio se llevó su bloque de refugios, sus padres aceptaron la propuesta de un rohinyá que trabaja en Malasia y pagaron a un intermediario su pasaje.","El pesquero cargó a 180 personas de noche, apiladas en niveles de tablones con 60 cm de altura libre. Dos tazas de agua al día. Frente a las islas Andamán el motor se fundió, la tripulación se fue en una lancha auxiliar, y el barco quedó 19 días a la deriva. Murieron diecinueve pasajeros; los vivos rezaron por ellos y los entregaron al mar.","Pescadores acehneses — desobedeciendo instrucciones de empujar el barco mar adentro — los remolcaron a tierra cerca de Lhokseumawe. Noor está otra vez en un campamento, todavía apátrida, todavía con veinte años. 'Cambié una espera por otra', dice. 'Pero esta espera no tiene valla.'"]}
},
{
name:"Cuerno de África → África Austral (Ruta del Sur)",
distance:"≈4.000 km (Adís Abeba → Johannesburgo)", duration:"1–8 meses",
stats:[["Principales orígenes","Etiopía, Somalia, RD del Congo, Malaui"],["Peligro característico","Camiones y contenedores sellados (64 asfixiados, Mozambique 2020)"],["Destino","Sudáfrica (Gauteng)"]],
overview:"La menos visible de las tres grandes rutas de salida del Cuerno de África. Etíopes y somalíes avanzan hacia el sur por Kenia, Tanzania, Malaui y Mozambique hacia la economía sudafricana — a menudo escondidos en camiones y contenedores sellados organizados por redes de tráfico, o cruzando el lago Malaui en barca. Las muertes por asfixia en compartimentos de carga son la tragedia característica de esta ruta.",
terrain:"Largas distancias de sabana y altiplano, los cruces nocturnos del lago Malaui, el río Limpopo infestado de cocodrilos en la frontera sudafricana, y los matorrales fronterizos controlados por bandas de asaltantes ('magumaguma').",
blockage:"El control de los puestos entre Kenia y Tanzania empuja a los grupos a compartimentos de carga sellados; las redadas de detención en Mozambique desvían las rutas por Zimbabue. En Beitbridge, la valla y las patrullas empujan a quienes cruzan hacia los vados informales del Limpopo.",
altPaths:["Tramo en barca por el lago Malaui"],
reroutes:[{name:"Desvío por Zimbabue",reason:"Las redadas de detención en Mozambique empujan los convoyes al oeste, por Zimbabue, para llegar a Beitbridge."}],
crossings:[
 {name:"Moyale (Etiopía→Kenia)",note:"Principal salida sur de Etiopía."},
 {name:"Karonga / Songwe (Tanzania→Malaui)",note:"Punto de transbordo de camiones; salidas de barcas por el lago Malaui."},
 {name:"Corredor de Tete, Mozambique",note:"Donde se han repetido las tragedias de camiones sellados."},
 {name:"Beitbridge / Río Limpopo (→Sudáfrica)",note:"La frontera terrestre más transitada de África; vados informales acechados por bandas de asaltantes."}
],
story:{who:"Tesfay, 22 años — personaje compuesto ficticio",origin:"Eritrea",
text:["Tesfay fue reclutado a los 17 años para el servicio nacional de Eritrea, que no tiene fecha de fin. Se escabulló a Etiopía de noche, pasó dos años en un campamento de refugiados cerca de Shire, y luego pagó a una cadena de intermediarios rumbo no al norte, hacia Libia — había oído las notas de voz desde las casas de extorsión — sino al sur.","Por Kenia viajó tumbado bajo sacos de maíz. En Tanzania, la caja de carga del camión fue soldada durante tres días con 38 hombres dentro; se turnaban para tumbarse bajo el único agujero de aire taladrado. Piensa a menudo en los 64 etíopes hallados asfixiados en un contenedor en Mozambique en 2020, porque aquel camión y su camión eran el mismo camión, solo que con más suerte.","Cruzó el lago Malaui en una barca nocturna, salió de una celda mozambiqueña a base de sobornos, y vadeó el Limpopo al amanecer entre orillas con cocodrilos mientras hombres llamados magumaguma despojaban al grupo de teléfonos y zapatos. Johannesburgo, mes nueve. Su solicitud de asilo tardará años en ser atendida; sus manos, dice, llegaron listas para trabajar."]}
}
,
{
name:"Escalada en Oriente Medio — Irán ⇄ sus vecinos (movilidad de crisis 2026)",
distance:"600–2.000 km por tierra desde Teherán hasta la frontera abierta más cercana", duration:"Días — las fronteras siguieron abiertas; movimientos sobre todo preventivos o económicos",
stats:[["Irán→Afganistán desde el 1 de marzo","514.066 personas (–10% semanal)"],["Irán→Pakistán","30.943 (sobre todo por Taftan–Mirjaveh)"],["Irán⇄Irak, mayo","535.428 entradas / 517.160 salidas (4 de 12 cruces)"],["Alto el fuego","Memorando EE. UU.–Irán, 17 de junio de 2026 (60 días)"]],
overview:"El corredor más nuevo de este mapa — un caso de estudio en vivo de movilidad de crisis, monitoreado semanalmente por la Matriz de Seguimiento de Desplazamientos (DTM) de la OIM. La escalada de junio de 2026 entre Israel, Estados Unidos e Irán puso a la gente en movimiento por todas las fronteras iraníes — y sin embargo desafió la expectativa del 'éxodo masivo': los flujos se mantuvieron moderados, localizados y en gran medida económicos. Afganistán recibió con diferencia la mayor cantidad de movimientos (514.066 entradas desde marzo, muchos de ellos trabajadores afganos que volvían a casa), mientras que el Líbano, golpeado en la misma escalada, contó más de 704.000 desplazados internos — de los cuales 523.249 habían regresado a fines de junio tras el alto el fuego del 17 de junio. Dentro del propio Irán, unas 9.000 personas seguían sin poder volver a sus viviendas dañadas.",
terrain:"La meseta iraní está rodeada de geografía dura: los montes Zagros hacia Irak, los vastos desiertos de Dasht-e Kavir y Dasht-e Lut en el interior, y las áridas tierras fronterizas del Baluchistán hacia Pakistán. Todo movimiento se canaliza por un puñado de puestos fronterizos de desierto y montaña.",
blockage:"De 44 puntos de entrada monitoreados, 28 estaban totalmente abiertos, 9 parcialmente abiertos y 7 cerrados a fines de junio de 2026. La dinámica más oscura es el retorno forzoso: afganos deportados desde Turquía a través de Irán llegan a Islam Qala reportando pérdida de pertenencias y maltrato en detención, e incluso viajeros con documentos fueron rechazados en Milak — aquí es el control, no la guerra, lo que cierra las puertas.",
altPaths:["A Pakistán (Zahedán → Taftan–Mirjaveh → Quetta)","Cruce de Milak / Zaranj (Sistán)","Al Kurdistán iraquí (Kermanshah → Bashmagh → Suleimaniya)","A Armenia (Tabriz → Agarak → Ereván)","A Turquía (Tabriz → Kapıköy → Van)"],
reroutes:[{name:"Cadena de deportación en sentido inverso: Turquía → Irán → Islam Qala",reason:"Mientras los civiles salían, los deportados atravesaban: afganos devueltos por la fuerza desde Turquía a través de Irán llegan a Islam Qala reportando pérdida de pertenencias y maltrato en detención. Los retornos forzosos aumentaron en Islam Qala y Milak a fines de junio de 2026 (OIM DTM)."}],
crossings:[
 {name:"Islam Qala (Irán→Afganistán)",note:"La puerta más transitada del corredor — la mayor parte de las 514.066 entradas a Afganistán desde marzo, más el aumento de retornos forzosos de deportados enviados desde Turquía."},
 {name:"Milak / Zaranj (Irán→Afganistán)",note:"Retornos forzosos en aumento; incluso viajeros con documentos válidos reportaron ser rechazados a fines de junio de 2026."},
 {name:"Taftan–Mirjaveh (Irán→Pakistán)",note:"25.939 de los 30.943 cruces hacia Pakistán desde marzo."},
 {name:"Bashmagh (Irán⇄Kurdistán iraquí)",note:"El 70% de las llegadas son ciudadanos iraníes — visitas familiares, trabajo, turismo; aquí no se reportó movimiento motivado por el conflicto."},
 {name:"Agarak (Irán→Armenia)",note:"4.930 entradas registradas; también una vía de retorno para iraníes que vuelven del Golfo."},
 {name:"Teherán (núcleo de origen)",note:"≈9.000 personas siguen desplazadas dentro de Irán, muchas alojadas en hoteles, sin poder volver a viviendas dañadas."}
],
story:{who:"Jawad, 26 años — personaje compuesto ficticio",origin:"Herat, Afganistán (trabajando en Teherán)",
text:["Jawad llevaba tres años vaciando concreto en Teherán, enviando la mitad de cada paga a Herat. Cuando comenzaron los ataques en junio de 2026, el capataz de la obra dejó de contestar el teléfono, y la ciudad que conocía desde lo alto de los andamios se vació a su alrededor — no con pánico, dice, sino con cálculo: familias conduciendo hacia sus parientes en el campo, obreros contando lo que se les debía.","Se unió a las filas de autobuses hacia el este con el salario de una temporada cosido a la chaqueta. En Islam Qala la fila tenía dos tipos de viajero: hombres como él, que volvían a casa a esperar una guerra que quizá no llegaría, y deportados que llegaban escoltados desde Turquía a través de Irán — hombres que habían perdido sus bolsos, sus teléfonos y, decían algunos en voz baja, cosas peores en detención. La frontera nunca se cerró; la OIM contó medio millón de cruces como el suyo en cuatro meses.","La noticia del alto el fuego llegó a Herat en el teléfono de su primo, once días después de su llegada. Jawad ya pregunta por los autobuses de regreso — los salarios de Teherán son cuatro veces los de Herat, y el mismo informe que lo contó cruzando hacia el este espera contarlo cruzando hacia el oeste. 'La frontera es una puerta que oscila', dice. 'Nosotros somos la bisagra.'"]}
}
,
{
name:"Asia Meridional → Libia → Italia (ruta híbrida aire-tierra-mar)",
distance:"≈9.000–11.000 km (Daca/Karachi → Italia)", duration:"Meses – años (los viajes se pausan en núcleos de tránsito para reunir fondos)",
stats:[["Surasiáticos en el Med. Central 2025","+45% (12.415 ene–jul)"],["Muertes desde 2021","775+ nacionales de Asia-Pacífico en el Med. Central"],["Riesgos reportados en Libia","59% robados · 49% violencia · 23% retenidos"],["Tránsitos clave","Turquía, EAU/Golfo, Egipto"]],
overview:"La ruta que comienza con un billete de avión legal. Migrantes de Bangladés y Pakistán — en su gran mayoría hombres jóvenes en busca de trabajo — vuelan vía Estambul, Dubái o El Cairo hacia Libia, a menudo con 'visados de trabajo' gestionados por intermediarios y financiados con deuda familiar. Las encuestas de la OIM de 2025 muestran cómo se difuminan origen, tránsito y destino: el 80% encuentra empleo en Libia (sobre todo construcción), los viajes se pausan meses para reunir fondos, y Libia pasa de destino a trampolín. El último tramo es el cruce del Mediterráneo Central en barco, donde la presencia surasiática creció un 45% en 2025 y al menos 775 nacionales de Asia-Pacífico han muerto desde 2021 — la mayoría bangladesíes y pakistaníes.",
terrain:"Una geografía distinta a la de cualquier otra ruta de este mapa: la mayor parte se vuela, a 11.000 metros, sobre los desiertos y mares que otros viajeros de este atlas cruzan a pie. El peligro se concentra al final — las ciudades costeras de Libia, donde la encuesta halló los peores abusos de la ruta, y luego 300 km de Mediterráneo abierto en una lancha neumática o un barco de hierro.",
blockage:"Libia es el cuello de botella: los migrantes reportaron robos (59%), violencia física (49%), trabajo sin paga (34%), cautiverio (23%) y engaños (33%); a un tercio le retuvieron los documentos. El robo salarial y la detención dejan a la gente varada entre un hogar con el que están endeudados y un mar que aún no pueden pagar — para muchos, el barco se convierte en la única salida que queda.",
altPaths:["Vía Estambul (43% de los bangladesíes encuestados en Libia)","Salidas de Pakistán (Karachi → núcleos del Golfo)","Ramal pakistaní por tierra vía Irán (48% de los pakistaníes en Italia)"],
reroutes:[{name:"Salida oriental: Libia → Creta/Grecia",reason:"Al endurecerse la interceptación en el Mediterráneo Central, las salidas se desplazan al este de Libia hacia Creta — el mismo corredor que está transformando la ruta del Med. Central."}],
crossings:[
 {name:"Daca (salida)",note:"Los viajes suelen comenzar en un vuelo legal, financiado con préstamos familiares de miles de dólares a intermediarios."},
 {name:"Dubái / núcleo del Golfo",note:"37% de los tránsitos; donde la ruta irregular se monta sobre los corredores establecidos de migración laboral al Golfo."},
 {name:"Núcleo aéreo de Estambul",note:"Principal tránsito de los bangladesíes rumbo a Libia (43%)."},
 {name:"El Cairo → por tierra a Libia",note:"Egipto es la puerta terrestre hacia el este de Libia."},
 {name:"Bengasi, Libia",note:"Núcleo laboral y el punto más peligroso de la ruta: robos, violencia, salarios impagados y cautiverio documentados a gran escala."},
 {name:"Costa de Trípoli (salida en barco)",note:"El tramo final y más mortal: el cruce del Mediterráneo Central hacia Lampedusa/Sicilia."}
],
story:{who:"Rashed, 24 años — personaje compuesto ficticio",origin:"Sylhet, Bangladés",
text:["El viaje de Rashed no comenzó en una playa sino en un aeropuerto, con su mejor camisa puesta. El paquete del intermediario — 'visado de trabajo, Libia, buen sueldo' — le costó a su familia 900.000 takas, garantizados con su tierra. El itinerario fue legal en cada paso: Daca a Dubái, Dubái a El Cairo, un autobús con otros cincuenta hombres hasta Bengasi. Recuerda haber pensado que la ruta no se parecía en nada a las de la televisión. Sin desierto. Sin valla. Un asiento de ventanilla.","Libia fue donde terminó el viaje de los papeles. El trabajo de construcción existía, pero el salario llegaba a mitad de tarifa, luego a un cuarto, luego como excusas; cuando reclamó, el jefe de obra le recordó quién tenía su pasaporte. Lo robaron dos veces — la segunda, hombres de uniforme. Tras catorce meses no había pagado nada del préstamo y no podía permitirse volver a casa; un lugar en un barco a Italia costaba menos que un vuelo a Daca y, a diferencia del vuelo, prometía una forma de recuperar la tierra.","El cruce duró treinta y una horas, en un barco de hierro hundido hasta la borda con 94 personas. Ahora recoge tomates en Puglia, enviando dinero contra la deuda, cuatro años después de un viaje que el intermediario había presupuestado en tres semanas. 'Volé por encima de todas las fronteras', dice, 'y aun así terminé en el mar.'"]}
}
]};
