import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Check if user is logged in
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Fetch extra user details from Firestore
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        document.getElementById("user-name").innerText = userData.name || "User";
        document.getElementById("user-role-display").innerText = userData.role || "N/A";
        document.getElementById("user-email").innerText = user.email;
      } else {
        document.getElementById("user-name").innerText = "User";
        document.getElementById("user-email").innerText = user.email;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  } else {
    // If not logged in, redirect back to login page
    window.location.href = "index.html";
  }
});

// Logout Logic
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      window.location.href = "index.html";
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  });
}
