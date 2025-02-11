import React, { useState } from 'react';
import styles from './CalculadoraImc.module.css';
import './global.css';

const CalculadoraImc = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        if (!altura || !peso) return;

        const alturaMetros = parseFloat(altura) / 100;
        const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
        setIMC(imcCalculado);

        let classificacaoIMC = '';
        if (imcCalculado < 18.5) {
            classificacaoIMC = 'Abaixo do peso';
        } else if (imcCalculado < 24.9) {
            classificacaoIMC = 'Peso normal';
        } else if (imcCalculado < 29.9) {
            classificacaoIMC = 'Sobrepeso';
        } else {
            classificacaoIMC = 'Obesidade';
        }
        setClassificacao(classificacaoIMC);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Calculadora de IMC</h2>
            <div className={styles.formGroup}>
                <label>Altura (cm):</label>
                <input 
                    type="number" 
                    value={altura} 
                    onChange={(e) => setAltura(e.target.value)}
                    className={styles.inputField}
                />
            </div>
            <div className={styles.formGroup}>
                <label>Peso (kg):</label>
                <input 
                    type="number" 
                    value={peso} 
                    onChange={(e) => setPeso(e.target.value)}
                    className={styles.inputField}
                />
            </div>
            <button onClick={calcularIMC} className={styles.button}>Calcular</button>
            {imc && (
                <div className={styles.result}>
                    <h3>IMC: {imc}</h3>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
        </div>
    );
};

export default CalculadoraImc;
