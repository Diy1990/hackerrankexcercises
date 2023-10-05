function marsExploration(s) {
    const originalMessage = "SOS";
    let alteredCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== originalMessage[i % 3]) {
            alteredCount++;
        }
    }

    return alteredCount;
}
