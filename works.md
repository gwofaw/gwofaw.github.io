---
title: works
---

[...]

{% for work in site.works %}
 -  [{{work.tagline}} [{{ work.title }}]](/works/{{work.title}})
{% endfor %}

[...]
