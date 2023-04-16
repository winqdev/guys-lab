/****************************
*
*  winqdev (aka Vikke)    
*  (c) 2023               
*  ohmslaw package
*  under MIT License
*
****************************/
module.exports = {
    /**
     * 
     * @param {string} unit Unit to calculate
     * @param {number} arg First argument for calculation
     * @param {number} arg2 Second argument for calculation
     * @returns Calculated unit
     */
  calc(unit, arg, arg2) {
    if(unit === "R" || unit.toUpperCase() === "R") {
        if(typeof arg !== "number" || typeof arg2 !== "number") {
            console.log("Voltage (Second Argument) and Intensity (Third Argument) must be a number!")
            return
        } else if(!arg) {
            throw new Error("No voltage provided!")
        } else if(!arg2) {
            throw new Error("No intensity provided! (Ampere)")
        }

        console.log(`Resistance Calculator:\nFormula: R = V/I\nResult: ${arg / arg2} ohms`)
        return
    } else if(unit === "I" || unit.toUpperCase() === "I") {
        if(typeof arg !== "number" || typeof arg2 !== "number") {
            console.log("Voltage (Second Argument) and Resistance (Third Argument) must be a number!")
            return
        } else if(!arg) {
            throw new Error("No voltage provided!")
        } else if(!arg2) {
            throw new Error("No resistance provided!")
        }

        console.log(`Intensity Caculator:\nFormula: I = V/R\nResult: ${arg / arg2} ampere`)
        return
    } else if(unit === "V" || unit.toUpperCase() === "V") {
        if(typeof arg !== "number" || typeof arg2 !== "number") {
            console.log("Intensity (Second Argument) and Resistance (Third Argument) must be a number!")
            return
        } else if(!arg) {
            throw new Error("No intensity provided!")
        } else if(!arg2) {
            throw new Error("No resistance provided!")
        }

        console.log(`Voltage Caculator:\nFormula: V = I*R\nResult: ${arg * arg2} volts`)
        return
    } if(unit === "W" || unit.toUpperCase() === "W") { 
        if(typeof arg !== "number" || typeof arg2 !== "number") {
            console.log("Intensity (Second Argument) and Voltage (Third Argument) must be a number!")
            return
        } else if(!arg) {
            throw new Error("No intensity provided!")
        } else if(!arg2) {
            throw new Error("No voltage provided!")
        }

        console.log(`Watt Calculator:\nFormula: W = I*V\nResult: ${arg * arg2} watts`)
        return
    } else {
        console.log(`Unknown type!\nTypes: V - Voltages, I - Intensity, R - Ohms, W - Watts`)
    }
  },
  formulas() {
    console.log("\nResistance Formula: R = V/I\nIntensity Formula: I = V/R\nVoltage Formula: V = I*R\nWatt Formula: W = I*V\n\nSymbols Meaning:\nW - Watt\nI - Intensity\nV - Voltage\nR - Resistance")
  }
}