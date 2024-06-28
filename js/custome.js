


                // JavaScript to show content based on selected topic
                function showContent(topic) {
                  // Hide all topic content divs
                  var allContentDivs = document.querySelectorAll('.topic-content');
                  allContentDivs.forEach(function(div) {
                      div.style.display = 'none';
                  });
      
                  // Show the selected topic content
                  var selectedContent = document.getElementById(topic);
                  if (selectedContent) {
                      selectedContent.style.display = 'block';
                  }
              }