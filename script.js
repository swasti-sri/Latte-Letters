            function showPage(pageId) {
            var sections = document.querySelectorAll('.page-section');
            for (var i = 0; i < sections.length; i++) {
                sections[i].classList.remove('active');
            }
            var target = document.getElementById('page- + pageId');
            document.getElementById('page-' + pageId).classList.add('active');
            var navButtons = document.querySelectorAll('nav button');
            for (var j = 0; j < navButtons.length; j++) {
                navButtons[j].classList.remove('active');
            }
            document.getElementById('nav-' + pageId).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        function orderItem(itemName) {
            showPage('contact');
            document.getElementById('userItem').value = itemName;
            document.getElementById('userItem').focus();
        }
        function submitOrder(event) {
            event.preventDefault();
            var successBox = document.getElementById('successBox');
            successBox.style.display = 'block';
            document.getElementById('deliveryForm').reset();
            setTimeout(function() {
                successBox.style.display = 'none';
            }, 5000);
        }
