import React, { useState } from "react";

const Triangle = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const baseValue = parseFloat(base);
    const heightValue = parseFloat(height);

    if (
      isNaN(baseValue) ||
      isNaN(heightValue) ||
      baseValue <= 0 ||
      heightValue <= 0
    ) {
      alert("Please enter valid positive numbers for both base and height");
      return;
    }

    const triangleArea = (baseValue * heightValue) / 2;
    setArea(triangleArea);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      calculateArea();
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Triangle Area Solver</h1>

      <div style={styles.inputSection}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Base:</label>
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            onKeyPress={handleKeyPress}
            style={styles.input}
            placeholder="Enter base length"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Height:</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyPress={handleKeyPress}
            style={styles.input}
            placeholder="Enter height"
          />
        </div>
      </div>

      <button
        onClick={calculateArea}
        style={styles.calculateButton}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
      >
        Calculate Area
      </button>

      <div style={styles.resultsSection}>
        <h3 style={styles.resultsTitle}>Results:</h3>
        <div style={styles.resultsBox}>
          {area !== null ? (
            <div style={styles.result}>
              <div style={styles.resultItem}>
                <strong>Base: {base} units</strong>
              </div>
              <div style={styles.resultItem}>
                <strong>Height: {height} units</strong>
              </div>
              <div style={styles.resultItem}>
                <strong>Area: {area} square units</strong>
              </div>
              <div style={styles.formula}>
                Formula: Area = (base × height) ÷ 2
              </div>
              <div style={styles.calculation}>
                Calculation: ({base} × {height}) ÷ 2 = {area}
              </div>
            </div>
          ) : (
            <div style={styles.placeholder}>
              Enter base and height values, then click "Calculate Area" to see
              the result.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#333",
  },
  inputSection: {
    marginBottom: "25px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "2px solid #ddd",
    borderRadius: "25px",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  calculateButton: {
    width: "100%",
    padding: "15px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    marginBottom: "25px",
    transition: "background-color 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  resultsSection: {
    marginTop: "20px",
  },
  resultsTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  resultsBox: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #ddd",
    minHeight: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    textAlign: "center",
    color: "#333",
  },
  resultItem: {
    fontSize: "18px",
    marginBottom: "10px",
    padding: "8px",
    backgroundColor: "#f8f9fa",
    borderRadius: "5px",
    border: "1px solid #e9ecef",
  },
  formula: {
    fontSize: "14px",
    color: "#666",
    marginTop: "10px",
    fontStyle: "italic",
  },
  calculation: {
    fontSize: "14px",
    color: "#666",
    marginTop: "5px",
  },
  placeholder: {
    color: "#999",
    fontStyle: "italic",
    textAlign: "center",
  },
};

export default Triangle;
