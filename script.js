// script.js

function calculateRequiredGrade() {
  const currentGPA = parseFloat(document.getElementById('currentGPA').value);
  const targetGPA = parseFloat(document.getElementById('targetGPA').value);
  const currentYear = parseInt(document.getElementById('currentYear').value);
  const currentTerm = parseInt(document.getElementById('currentTerm').value);

  if (isNaN(currentGPA) || isNaN(targetGPA) || isNaN(currentYear) || isNaN(currentTerm)) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
  }

  if (currentGPA < 0 || currentGPA > 4 || targetGPA < 0 || targetGPA > 4) {
      alert("เกรดสะสมและเกรดที่ต้องการต้องอยู่ในช่วง 0.00-4.00");
      return;
  }

  const completedSemesters = (currentYear - 1) * 2 + currentTerm;
  const requiredTotalGPA = (targetGPA * (completedSemesters + 1)) - (currentGPA * completedSemesters);

  let resultText;
  if (requiredTotalGPA <= 4.0) {
      resultText = `เพื่อที่จะได้เกรดเฉลี่ย ${targetGPA} คุณต้องทำเกรดเฉลี่ย ${requiredTotalGPA.toFixed(2)} ในเทอมถัดไป`;
  } else {
      resultText = `การได้เกรดเฉลี่ย ${targetGPA} เป็นไปไม่ได้จากเกรดสะสมปัจจุบันของคุณ (${currentGPA}) แม้ว่าคุณจะได้เกรด A (4.00) ในเทอมถัดไปก็ตาม`;
  }

  document.getElementById('result').textContent = resultText;
}
