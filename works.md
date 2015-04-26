---
title: works
---

[...]

{% for work in site.works %}
[{{work.tagline}} [{{ work.name }}]](/works/{{work.name}})
{% endfor %}

[...]
