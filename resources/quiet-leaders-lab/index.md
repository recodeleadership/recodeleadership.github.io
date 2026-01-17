---
layout: page
title: Quiet Leaders Lab
subtitle: A monthly space for quiet leaders to explore leadership that feels more at ease and more true to ourselves.
permalink: /resources/quiet-leaders-lab/
description: Monthly gatherings for quiet, thoughtful leaders navigating visibility, confidence, and leadership in their own way.
image: /assets/img/resources/quiet-leaders-lab-400x300.png
cta_text: Subscribe to Event Calendar
cta_link: https://luma.com/quietleaderslab

---

Quiet Leaders Lab is a free, monthly gathering for quiet, thoughtful leaders who want to slow down, notice how they’re showing up as leaders, and explore experiments that help them lead more at ease and more true to themselves.

This is not a program to fix you or push you to perform. Instead, it’s a place to pause, reflect, and explore how you want to show up as a leader — alongside others who share similar values and experiences.

Gatherings may include guided reflection, shared learning, and open conversation. You’re welcome to participate actively or simply observe — whatever feels right for you in the moment.

***A few notes about the space***

- ​This is a facilitated group space, not therapy or formal training.
- ​Please treat what others share as confidential and shared in trust.
  - Insights and learnings may be carried forward; personal stories and identities should not be shared outside the Lab.
- ​The session may be recorded for the organizer’s learning and improvement only. Recordings will not be shared.
- Some AI tools (such as meeting transcription or summaries) will be used to support facilitation and learning.


<hr>

---
<div class="archive-section archive-section--upcoming">
  ## Upcoming Gatherings

  <div class="archive-list">
    {% assign upcoming = site.qll-gatherings
      | where_exp: "event", "event.date >= site.time"
      | sort: "date" %}
    {% for event in upcoming %}
      {% include qll-archive-item.html event=event %}
    {% endfor %}
  </div>
</div>

<div class="archive-section archive-section--past">
  ## Past Gatherings

  <div class="archive-list">
    {% assign past = site.qll-gatherings
      | where_exp: "event", "event.date < site.time"
      | sort: "date"
      | reverse %}
    {% for event in past %}
      {% include qll-archive-item.html event=event %}
    {% endfor %}
  </div>
</div>

  <div class="archive-list">
  {% assign past = site.qll-gatherings
    | where_exp: "event", "event.date < site.time"
    | sort: "date"
    | reverse %}
  {% for event in past %}
    {% include qll-archive-item.html event=event %}
  {% endfor %}
  </div>
</div>