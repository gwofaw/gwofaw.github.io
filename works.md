---
title: works
---

[...]

{% for work in site.works %}
[{{work.tagline}} [{{ work.path }}]](/works/{{work.path}})
{% endfor %}

[...]
