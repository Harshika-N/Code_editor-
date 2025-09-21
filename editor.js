function showTab(tab) {
      document.querySelectorAll(".code-tab").forEach(el => el.style.display = "none");
      document.getElementById(tab).style.display = "block";
      document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
      event.target.classList.add("active");
    }

    function runCode() {
      let html = document.getElementById("html").value;
      let css = "<style>" + document.getElementById("css").value + "</style>";
      let js = "<script>" + document.getElementById("js").value + "</script>";

      let preview = document.getElementById("preview").contentWindow.document;
      preview.open();
      preview.write(html + css + js);
      preview.close();
    }