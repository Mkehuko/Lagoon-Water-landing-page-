document.getElementById("orderForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents page reload

            // Capture user inputs
                let name = document.getElementById("name").value;
                    let email = document.getElementById("email").value;
                        let flavor = document.getElementById("flavor").value;

                            // Form validation
                                if (name === "" || email === "" || flavor === "") {
                                        alert("Please fill in all fields.");
                                                return;
                                                    }

                                                        // Show success message
                                                            document.getElementById("successMessage").classList.remove("hidden");

                                                                // Clear form fields
                                                                    document.getElementById("orderForm").reset();
                                                                    });
})