import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => setDisplay('');

  const buttons = [
    { label: 'AC', type: 'clear' }, { label: '+/-', type: 'toggle' }, { label: '%', type: 'percent' }, { label: '÷', type: 'operator', value: '/' },
    { label: '7' }, { label: '8' }, { label: '9' }, { label: '×', type: 'operator', value: '*' },
    { label: '4' }, { label: '5' }, { label: '6' }, { label: '−', type: 'operator', value: '-' },
    { label: '1' }, { label: '2' }, { label: '3' }, { label: '+', type: 'operator', value: '+' },
    { label: '0', span: 2 }, { label: '.' }, { label: '=', type: 'equal' }
  ];

  // iPhone-like color palette
  const buttonColors = {
    default: '#505050',
    operator: '#FF9500',
    clear: '#D4D4D2',
    equal: '#FF9500',
  };

  return (
    <div style={{ 
      maxWidth: '320px', 
      margin: '20px auto', 
      borderRadius: '30px', 
      padding: '15px',
      backgroundColor: 'black',
      fontFamily: 'Arial, sans-serif'
    }}>
      <input 
        type="text" 
        value={display} 
        readOnly 
        style={{
          width: '100%',
          marginBottom: '20px',
          padding: '15px',
          fontSize: '36px',
          textAlign: 'right',
          borderRadius: '10px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
        }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => btn.type === 'equal' ? calculate() : btn.type === 'clear' ? clear() : handleClick(btn.value || btn.label)}
            style={{
              padding: btn.span ? '20px 40px' : '20px',
              fontSize: '22px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: btn.type === 'operator' || btn.type === 'equal' ? buttonColors.operator : btn.type === 'clear' ? buttonColors.clear : buttonColors.default,
              color: btn.type === 'clear' ? 'black' : 'white',
              cursor: 'pointer',
              gridColumn: btn.span ? `span ${btn.span}` : 'auto',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
