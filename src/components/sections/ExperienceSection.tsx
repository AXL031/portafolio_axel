export function ExperienceSection() {
  return (
    <section className="experience-section page-width section-space" id="experiencia" aria-labelledby="experience-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / Trayectoria</p>
          <h2 id="experience-title">Experiencia profesional.</h2>
        </div>
      </div>

      <article className="experience-entry">
        <div className="experience-position">
          <p className="experience-company">Alignet S.A.C.</p>
          <h3>Practicante de Integraciones TI</h3>
          <p className="experience-period">
            <time dateTime="2026-09">Septiembre de 2026</time> – Actualidad
          </p>
        </div>

        <div className="experience-responsibilities">
          <div className="experience-responsibility">
            <h4>Integración de pagos</h4>
            <p>Participo en integraciones de pasarelas mediante <strong>APIs REST</strong>, servicios <strong>SOAP</strong> y notificaciones <strong>Server-to-Server (S2S)</strong>. Configuro servicios de pago y verifico su conexión con plataformas de comercio electrónico.</p>
          </div>
          <div className="experience-responsibility">
            <h4>Diagnóstico de incidencias</h4>
            <p>Analizo fallos en servicios transaccionales revisando respuestas de API, registros de errores y flujos de procesamiento.</p>
          </div>
          <div className="experience-responsibility">
            <h4>Configuración y datos</h4>
            <p>Consulto y actualizo configuraciones en <strong>MongoDB</strong> y bases de datos <strong>SQL</strong> para administrar integraciones y comercios.</p>
          </div>
          <div className="experience-responsibility">
            <h4>Validación y salida a producción</h4>
            <p>Valido <strong>3D Secure (3DS)</strong> y realizo pruebas funcionales en entornos de testing y producción. Colaboro con equipos técnicos y comercios para resolver incidencias y verificar las integraciones antes de su salida.</p>
          </div>
        </div>
      </article>
    </section>
  )
}
