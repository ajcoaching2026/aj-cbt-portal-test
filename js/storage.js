const STORAGE_KEY = "AJ_CBT_PORTAL_STATE";

function saveState(data) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}

function loadState() {
    try {
        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        );
    } catch {
        return null;
    }
}

function clearState() {
    localStorage.removeItem(STORAGE_KEY);
}
function saveCurrentState() {
    
    saveState({
        
        version: 2,
        
        status: "in_progress",
        
        testCode: testCode || "",
        
        currentQuestion: currentQuestion,
        
        examStartTime: examStartTime,
        
        remainingTime: remainingTime,
        
        questions: questions,
        
        result: null
        
    });
    
}
function saveSubmittedState(result) {
    
    saveState({
        
        version: 2,
        
        status: "submitted",
        
        testCode: testCode || "",
        
        currentQuestion: currentQuestion,
        
        examStartTime: examStartTime,
        
        remainingTime: remainingTime,
        
        questions: questions,
        
        result: result
        
    });
    
}