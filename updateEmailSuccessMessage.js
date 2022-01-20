// Select the node that will be observed for mutations
        const targetNode = document.getElementById('divEmailStatusFrame');
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: false, subtree: false };
        // Callback function to execute when mutations are observed
        const callback = function(mutationsList, observer) {
            // Use traditional 'for loops' for IE 11
            for(var ix=0 ; ix< mutationsList.length ; ix++) {
            // for(let mutation of mutationsList) {
                if (mutationsList[ix].type === 'attributes') {
                    //console.log('The ' + mutation.attributeName + ' attribute was modified.');
                    if (mutationsList[ix].attributeName === 'class') {
                        //console.log(mutation);
                        if($(divEmailStatusFrame).hasClass("alert-success")){
                            $("#divEmailStatus").html('<span><h2 style="font-size: 24px">Email sent</h2><p>You should receive an email with a link to check your progress in the queue.</p><p>We&apos;ll send another email when it&apos;s nearly your turn.</p><p>If you don&apos;t receive these emails, check your spam or junk folders and check your progress regularly so you don&apos;t miss your turn.</p></span>');
                        }
                        else if($(divEmailStatusFrame).hasClass("alert-error")){
                            $("#divEmailStatus").html('<span><h2 style="font-size: 24px;font-weight:bold; color:#000 !important;">There is a problem</h2><p>This doesn&apos;t look like a valid email address. Check you&apos;ve typed it correctly.</p></span>');
                        }
                    }
                }
            }
        };
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);