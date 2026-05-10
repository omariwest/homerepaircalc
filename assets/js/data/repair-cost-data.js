window.HRC_REPAIR_COST_DATA = {
  plumbing: {
    label: "Plumbing repair",
    jobs: {
      "faucet-repair": {
        label: "Faucet repair or replacement",
        sizes: {
          small: {
            low: 150,
            high: 280,
            laborShare: 0.78,
            time: "1–2 hours",
            recommendation:
              "DIY may be reasonable for a simple washer or cartridge replacement if the shutoff valve works.",
            note: "Costs rise if the faucet is corroded, access is tight, or supply lines need replacement.",
          },
          medium: {
            low: 240,
            high: 420,
            laborShare: 0.76,
            time: "2–3 hours",
            recommendation:
              "A professional is safer if the faucet, supply lines, or shutoff valves need replacement.",
            note: "Older fixtures and damaged shutoff valves can increase labor time.",
          },
          large: {
            low: 380,
            high: 680,
            laborShare: 0.74,
            time: "3–5 hours",
            recommendation:
              "Use a qualified plumber when access is difficult or multiple fixture parts are failing.",
            note: "Hidden leaks, damaged cabinets, or wall access can push the final quote higher.",
          },
        },
      },

      "toilet-repair": {
        label: "Toilet repair",
        sizes: {
          small: {
            low: 140,
            high: 260,
            laborShare: 0.78,
            time: "1–2 hours",
            recommendation:
              "DIY may be reasonable for a flapper, fill valve, or simple running-toilet repair.",
            note: "Costs increase if the toilet must be removed or the flange is damaged.",
          },
          medium: {
            low: 240,
            high: 420,
            laborShare: 0.76,
            time: "2–3 hours",
            recommendation:
              "Use a professional if the toilet leaks at the base or the repair involves the flange.",
            note: "Wax ring, flange, or floor issues can add labor and material cost.",
          },
          large: {
            low: 420,
            high: 750,
            laborShare: 0.72,
            time: "3–5 hours",
            recommendation:
              "A professional is recommended when water damage, loose flooring, or drain issues are involved.",
            note: "Floor damage or drain alignment problems can make the job more expensive.",
          },
        },
      },

      "drain-unclog": {
        label: "Drain unclogging",
        sizes: {
          small: {
            low: 130,
            high: 260,
            laborShare: 0.86,
            time: "1–2 hours",
            recommendation:
              "DIY may be reasonable for a simple sink or tub clog before calling a plumber.",
            note: "Avoid harsh chemical overuse because it may damage older pipes.",
          },
          medium: {
            low: 240,
            high: 430,
            laborShare: 0.88,
            time: "2–3 hours",
            recommendation:
              "Use a professional if the clog returns quickly or affects more than one drain.",
            note: "Deeper clogs usually need snaking or professional drain equipment.",
          },
          large: {
            low: 450,
            high: 900,
            laborShare: 0.9,
            time: "3–6 hours",
            recommendation:
              "A professional is recommended for repeated clogs, sewer odor, backups, or multiple slow drains.",
            note: "Main-line or severe clogs may require inspection or more advanced clearing.",
          },
        },
      },

      "pipe-leak": {
        label: "Small pipe leak repair",
        sizes: {
          small: {
            low: 180,
            high: 420,
            laborShare: 0.76,
            time: "1–3 hours",
            recommendation:
              "A professional is usually safer because leak repairs can cause water damage if done incorrectly.",
            note: "Accessible pipe leaks are cheaper than leaks behind walls, ceilings, or cabinets.",
          },
          medium: {
            low: 450,
            high: 950,
            laborShare: 0.74,
            time: "3–6 hours",
            recommendation:
              "Use a qualified plumber if the leak is hidden, active, or near electrical areas.",
            note: "Wall access, pipe material, and water damage can change the final quote quickly.",
          },
          large: {
            low: 900,
            high: 2200,
            laborShare: 0.72,
            time: "1–2 days",
            recommendation:
              "A professional is strongly recommended for hidden leaks, burst pipes, or urgent water damage.",
            note: "This estimate does not include major drywall, flooring, mold, or structural repair.",
          },
        },
      },

      "fixture-install": {
        label: "Basic fixture installation",
        sizes: {
          small: {
            low: 180,
            high: 360,
            laborShare: 0.68,
            time: "1–2 hours",
            recommendation:
              "DIY may be reasonable for simple fixture swaps if plumbing connections are already in place.",
            note: "Costs are lower when no new water lines, drain changes, or wall access are needed.",
          },
          medium: {
            low: 350,
            high: 700,
            laborShare: 0.68,
            time: "2–5 hours",
            recommendation:
              "Use a professional if the fixture requires new connections or old parts are corroded.",
            note: "Labor increases when the fixture location or connections need adjustment.",
          },
          large: {
            low: 700,
            high: 1400,
            laborShare: 0.66,
            time: "1 day",
            recommendation:
              "A professional is recommended when the job involves new plumbing, access work, or multiple fixtures.",
            note: "This range assumes a basic fixture job, not a full remodel.",
          },
        },
      },
    },
  },

  electrical: {
    label: "Electrical repair",
    jobs: {
      "outlet-repair": {
        label: "Outlet repair or replacement",
        sizes: {
          small: {
            low: 120,
            high: 230,
            laborShare: 0.82,
            time: "1–2 hours",
            recommendation:
              "DIY is not recommended unless you are fully comfortable shutting off power and verifying the circuit is safe.",
            note: "Costs rise for GFCI outlets, damaged wiring, older boxes, or outlets in kitchens, bathrooms, garages, and outdoor areas.",
          },
          medium: {
            low: 220,
            high: 420,
            laborShare: 0.82,
            time: "2–3 hours",
            recommendation:
              "Use a qualified electrician if the outlet is warm, loose, sparking, or repeatedly failing.",
            note: "Multiple outlets, grounding issues, or hidden wiring problems can increase the final quote.",
          },
          large: {
            low: 420,
            high: 850,
            laborShare: 0.84,
            time: "3–6 hours",
            recommendation:
              "A professional is strongly recommended when the issue may involve wiring, grounding, or circuit protection.",
            note: "This range does not include major rewiring or panel upgrades.",
          },
        },
      },

      "switch-repair": {
        label: "Switch repair or replacement",
        sizes: {
          small: {
            low: 110,
            high: 220,
            laborShare: 0.84,
            time: "1–2 hours",
            recommendation:
              "A simple switch replacement may look small, but use caution because wiring mistakes can create fire risk.",
            note: "Dimmer switches, smart switches, and older wiring can increase cost.",
          },
          medium: {
            low: 200,
            high: 380,
            laborShare: 0.84,
            time: "2–3 hours",
            recommendation:
              "Use an electrician if the switch controls multiple fixtures or the wiring is unclear.",
            note: "Three-way switches and smart controls usually cost more than a basic switch swap.",
          },
          large: {
            low: 380,
            high: 750,
            laborShare: 0.85,
            time: "3–5 hours",
            recommendation:
              "A professional is recommended when switches are hot, buzzing, flickering, or connected to older wiring.",
            note: "Troubleshooting wiring faults can add labor time.",
          },
        },
      },

      "breaker-issue": {
        label: "Breaker or circuit issue",
        sizes: {
          small: {
            low: 180,
            high: 350,
            laborShare: 0.82,
            time: "1–2 hours",
            recommendation:
              "Use a qualified electrician for breaker work. Do not guess with panel components.",
            note: "A simple breaker replacement is different from diagnosing repeated tripping or overloaded circuits.",
          },
          medium: {
            low: 350,
            high: 800,
            laborShare: 0.84,
            time: "2–5 hours",
            recommendation:
              "A professional is recommended if a breaker trips repeatedly or controls important appliances.",
            note: "Troubleshooting can uncover overloaded circuits, damaged wiring, or panel limitations.",
          },
          large: {
            low: 800,
            high: 1800,
            laborShare: 0.82,
            time: "1 day",
            recommendation:
              "A licensed electrician is strongly recommended for panel-related or code-sensitive work.",
            note: "This estimate does not include full panel replacement, service upgrades, or major rewiring.",
          },
        },
      },

      "light-fixture": {
        label: "Light fixture repair or replacement",
        sizes: {
          small: {
            low: 150,
            high: 320,
            laborShare: 0.72,
            time: "1–2 hours",
            recommendation:
              "DIY may be reasonable only for a simple fixture swap on an existing safe box.",
            note: "Heavy fixtures, high ceilings, and old wiring can increase the price.",
          },
          medium: {
            low: 300,
            high: 650,
            laborShare: 0.76,
            time: "2–4 hours",
            recommendation:
              "Use an electrician if the fixture is heavy, the box is loose, or the wiring looks old.",
            note: "Fixture cost is not included unless supplied by the electrician.",
          },
          large: {
            low: 650,
            high: 1400,
            laborShare: 0.78,
            time: "4–8 hours",
            recommendation:
              "A professional is recommended for new fixture locations, ceiling access, or multiple fixtures.",
            note: "New wiring, ceiling repair, or box reinforcement can raise the final quote.",
          },
        },
      },

      "ceiling-fan": {
        label: "Ceiling fan installation or repair",
        sizes: {
          small: {
            low: 180,
            high: 380,
            laborShare: 0.74,
            time: "1–3 hours",
            recommendation:
              "DIY may be reasonable only if replacing an existing fan-rated box and wiring is already correct.",
            note: "A fan must be mounted to a properly rated electrical box, not a basic light fixture box.",
          },
          medium: {
            low: 380,
            high: 750,
            laborShare: 0.78,
            time: "3–5 hours",
            recommendation:
              "Use an electrician if the fan needs new wiring, a wall control, or a fan-rated box.",
            note: "Higher ceilings and new controls can add cost.",
          },
          large: {
            low: 750,
            high: 1500,
            laborShare: 0.8,
            time: "1 day",
            recommendation:
              "A professional is strongly recommended for new wiring, high ceilings, or heavy fans.",
            note: "This estimate does not include major ceiling repair or structural reinforcement.",
          },
        },
      },
    },
  },

  drywall: {
    label: "Drywall repair",
    jobs: {
      "small-hole": {
        label: "Small hole or dent repair",
        sizes: {
          small: {
            low: 90,
            high: 180,
            laborShare: 0.78,
            time: "1–2 hours",
            recommendation:
              "DIY may be reasonable for a small nail hole, dent, or simple patch if texture matching is not important.",
            note: "Costs rise when the wall has heavy texture, difficult access, or needs repainting beyond the patch.",
          },
          medium: {
            low: 160,
            high: 320,
            laborShare: 0.76,
            time: "2–3 hours",
            recommendation:
              "A handyman or drywall pro is safer when the patch must blend into a visible wall.",
            note: "Matching paint and texture usually takes more time than the patch itself.",
          },
          large: {
            low: 280,
            high: 520,
            laborShare: 0.74,
            time: "3–5 hours",
            recommendation:
              "Use a professional if the damaged area is wide, visible, or needs clean texture blending.",
            note: "Large visible repairs may require repainting the full wall section for a clean finish.",
          },
        },
      },

      "medium-patch": {
        label: "Medium drywall patch",
        sizes: {
          small: {
            low: 180,
            high: 350,
            laborShare: 0.76,
            time: "2–4 hours",
            recommendation:
              "DIY is possible for basic patching, but a pro gives a cleaner result on visible walls.",
            note: "The estimate assumes one damaged area with normal access.",
          },
          medium: {
            low: 320,
            high: 650,
            laborShare: 0.74,
            time: "Half day",
            recommendation:
              "Use a drywall pro if the repair needs taping, mudding, sanding, and paint blending.",
            note: "Multiple coats of compound may require return visits or drying time.",
          },
          large: {
            low: 600,
            high: 1200,
            laborShare: 0.72,
            time: "1 day",
            recommendation:
              "A professional is recommended for multiple patches or larger damaged wall sections.",
            note: "This range does not include major framing, insulation, or full-room repainting.",
          },
        },
      },

      "ceiling-patch": {
        label: "Ceiling drywall patch",
        sizes: {
          small: {
            low: 180,
            high: 380,
            laborShare: 0.78,
            time: "2–4 hours",
            recommendation:
              "A professional is usually safer because ceiling patches are harder to blend and work overhead.",
            note: "Costs increase for high ceilings, popcorn texture, or difficult ladder access.",
          },
          medium: {
            low: 380,
            high: 800,
            laborShare: 0.76,
            time: "Half day to 1 day",
            recommendation:
              "Use a drywall pro when the ceiling repair needs clean texture matching or paint blending.",
            note: "Ceiling repairs often cost more than wall repairs because access and finishing are harder.",
          },
          large: {
            low: 800,
            high: 1800,
            laborShare: 0.74,
            time: "1–2 days",
            recommendation:
              "A professional is strongly recommended for sagging drywall, large ceiling cuts, or moisture damage.",
            note: "This estimate does not include structural repair, insulation, or fixing the source of a leak.",
          },
        },
      },

      "water-damage": {
        label: "Water-damaged drywall repair",
        sizes: {
          small: {
            low: 250,
            high: 550,
            laborShare: 0.72,
            time: "Half day",
            recommendation:
              "Do not close the wall until the leak source is fixed and the area is dry.",
            note: "Small water damage can become expensive if moisture remains behind the drywall.",
          },
          medium: {
            low: 550,
            high: 1400,
            laborShare: 0.7,
            time: "1–2 days",
            recommendation:
              "Use a professional if the drywall is soft, stained, sagging, or near electrical areas.",
            note: "This range assumes drywall repair only, not plumbing repair or mold remediation.",
          },
          large: {
            low: 1400,
            high: 3500,
            laborShare: 0.68,
            time: "2–4 days",
            recommendation:
              "A professional inspection is recommended for large water-damaged areas or repeated leaks.",
            note: "Mold, insulation, flooring, framing, and leak repair can add significant cost.",
          },
        },
      },

      "texture-match": {
        label: "Texture matching and blending",
        sizes: {
          small: {
            low: 120,
            high: 280,
            laborShare: 0.82,
            time: "1–3 hours",
            recommendation:
              "DIY may be reasonable for low-visibility areas, but texture matching is easy to notice when done poorly.",
            note: "Orange peel, knockdown, and popcorn textures may require different tools and techniques.",
          },
          medium: {
            low: 280,
            high: 650,
            laborShare: 0.8,
            time: "Half day",
            recommendation:
              "Use a pro when the repaired wall is highly visible or receives strong natural light.",
            note: "Blending texture and paint often determines whether the repair looks professional.",
          },
          large: {
            low: 650,
            high: 1500,
            laborShare: 0.78,
            time: "1–2 days",
            recommendation:
              "A professional is recommended for large blended areas, ceilings, or matching older texture.",
            note: "Large texture work may require repainting a larger wall or ceiling section.",
          },
        },
      },
    },
  },

  painting: {
    label: "Painting cost",
    jobs: {
      "room-repaint": {
        label: "Interior room repaint",
        sizes: {
          small: {
            low: 300,
            high: 650,
            laborShare: 0.7,
            time: "Half day to 1 day",
            recommendation:
              "DIY may be reasonable for a small room with clean walls and simple trim.",
            note: "Costs rise if walls need patching, primer, stain blocking, or multiple coats.",
          },
          medium: {
            low: 650,
            high: 1500,
            laborShare: 0.72,
            time: "1–2 days",
            recommendation:
              "A professional is useful when prep work, ceiling lines, trim, or color changes matter.",
            note: "Paint quality, wall condition, and furniture moving can change the final price.",
          },
          large: {
            low: 1500,
            high: 3500,
            laborShare: 0.74,
            time: "2–4 days",
            recommendation:
              "Use a professional for multiple rooms, high ceilings, heavy prep, or visible finish work.",
            note: "This range does not include major drywall repair or full-home repainting.",
          },
        },
      },

      "paint-touch-up": {
        label: "Paint touch-up and blending",
        sizes: {
          small: {
            low: 120,
            high: 280,
            laborShare: 0.76,
            time: "1–3 hours",
            recommendation:
              "DIY may be reasonable if you have the exact paint and the area is not highly visible.",
            note: "Touch-ups can look uneven if the old paint has faded or the wall has texture.",
          },
          medium: {
            low: 280,
            high: 650,
            laborShare: 0.78,
            time: "Half day",
            recommendation:
              "Use a pro when the repair is in strong light or needs blending across a larger wall section.",
            note: "A small mark may require painting a larger area for the finish to look even.",
          },
          large: {
            low: 650,
            high: 1400,
            laborShare: 0.78,
            time: "1 day",
            recommendation:
              "A professional is recommended when several walls need blending or matching older paint.",
            note: "Large touch-up work can turn into partial-room repainting.",
          },
        },
      },

      "trim-door-paint": {
        label: "Trim or door painting",
        sizes: {
          small: {
            low: 150,
            high: 350,
            laborShare: 0.72,
            time: "2–4 hours",
            recommendation:
              "DIY may be reasonable for one basic door or a short trim section.",
            note: "Prep, sanding, caulking, and smooth brushwork affect the final look.",
          },
          medium: {
            low: 350,
            high: 900,
            laborShare: 0.74,
            time: "Half day to 1 day",
            recommendation:
              "Use a pro if the trim needs sanding, caulking, or a smooth enamel finish.",
            note: "Detailed trim takes longer than flat wall painting.",
          },
          large: {
            low: 900,
            high: 2200,
            laborShare: 0.76,
            time: "1–3 days",
            recommendation:
              "A professional is recommended for many doors, detailed trim, or stained-to-painted conversions.",
            note: "Older trim may need extra prep, primer, or repair before painting.",
          },
        },
      },

      "cabinet-painting": {
        label: "Cabinet painting",
        sizes: {
          small: {
            low: 900,
            high: 1800,
            laborShare: 0.68,
            time: "2–4 days",
            recommendation:
              "DIY is possible but risky if you cannot prep, prime, and finish cabinets cleanly.",
            note: "Cabinet painting is mostly prep work. Poor sanding or primer can cause peeling.",
          },
          medium: {
            low: 1800,
            high: 4500,
            laborShare: 0.7,
            time: "4–7 days",
            recommendation:
              "A professional is recommended for most kitchen cabinet painting projects.",
            note: "Door count, finish quality, hardware removal, and spray setup strongly affect cost.",
          },
          large: {
            low: 4500,
            high: 9000,
            laborShare: 0.72,
            time: "1–2 weeks",
            recommendation:
              "Use a professional for large kitchens, detailed cabinets, or a factory-like finish.",
            note: "This range does not include cabinet replacement, refacing, or major carpentry repair.",
          },
        },
      },

      "exterior-touch-up": {
        label: "Exterior paint repair",
        sizes: {
          small: {
            low: 250,
            high: 600,
            laborShare: 0.72,
            time: "Half day",
            recommendation:
              "DIY may be reasonable for low, easy-access touch-ups with safe ladder use.",
            note: "Weather, surface prep, peeling paint, and height can raise the cost.",
          },
          medium: {
            low: 600,
            high: 1800,
            laborShare: 0.74,
            time: "1–2 days",
            recommendation:
              "Use a professional if scraping, priming, ladder work, or siding repair is involved.",
            note: "Exterior repairs often need more prep than interior painting.",
          },
          large: {
            low: 1800,
            high: 5000,
            laborShare: 0.76,
            time: "2–5 days",
            recommendation:
              "A professional is recommended for high areas, large peeling sections, or multi-surface exterior repairs.",
            note: "This estimate does not include full exterior repainting, wood rot repair, or lead paint work.",
          },
        },
      },
    },
  },

  roof: {
    label: "Roof repair",
    jobs: {
      "missing-shingles": {
        label: "Missing or damaged shingles",
        sizes: {
          small: {
            low: 180,
            high: 450,
            laborShare: 0.72,
            time: "1–3 hours",
            recommendation:
              "DIY is only reasonable for low, safe roof access and a very small repair.",
            note: "Costs rise with steep slopes, difficult access, matching older shingles, or storm damage.",
          },
          medium: {
            low: 450,
            high: 1100,
            laborShare: 0.74,
            time: "Half day",
            recommendation:
              "Use a roofer when several shingles are missing or the damaged area is near flashing or a valley.",
            note: "Matching color and checking underlayment can affect the final cost.",
          },
          large: {
            low: 1100,
            high: 2800,
            laborShare: 0.76,
            time: "1–2 days",
            recommendation:
              "A professional is recommended for large shingle sections, steep roofs, or widespread storm damage.",
            note: "This range does not include full roof replacement or structural deck repair.",
          },
        },
      },

      "roof-leak": {
        label: "Roof leak repair",
        sizes: {
          small: {
            low: 300,
            high: 750,
            laborShare: 0.72,
            time: "2–4 hours",
            recommendation:
              "A professional is safer because the visible leak may not be directly below the roof problem.",
            note: "Leak tracing can add time, especially around valleys, vents, chimneys, and flashing.",
          },
          medium: {
            low: 750,
            high: 1800,
            laborShare: 0.74,
            time: "Half day to 1 day",
            recommendation:
              "Use a roofer if the leak is active, recurring, or near electrical, attic, or ceiling damage.",
            note: "This estimate does not include interior drywall, insulation, or mold repair.",
          },
          large: {
            low: 1800,
            high: 5000,
            laborShare: 0.76,
            time: "1–3 days",
            recommendation:
              "A professional inspection is strongly recommended for large or repeated leaks.",
            note: "Major leaks may involve decking, flashing systems, underlayment, or partial roof replacement.",
          },
        },
      },

      "flashing-repair": {
        label: "Flashing repair",
        sizes: {
          small: {
            low: 250,
            high: 700,
            laborShare: 0.7,
            time: "2–4 hours",
            recommendation:
              "Use a roofer if flashing is near a chimney, skylight, valley, or roof-wall connection.",
            note: "Flashing repairs are detail-sensitive and poor sealing can cause repeat leaks.",
          },
          medium: {
            low: 700,
            high: 1600,
            laborShare: 0.72,
            time: "Half day to 1 day",
            recommendation:
              "A professional is recommended when flashing must be removed, replaced, and tied into shingles.",
            note: "Costs rise if nearby shingles, siding, or counterflashing must be disturbed.",
          },
          large: {
            low: 1600,
            high: 4000,
            laborShare: 0.74,
            time: "1–2 days",
            recommendation:
              "Use a professional for chimney flashing, skylight flashing, or large roof-wall transitions.",
            note: "This range does not include masonry repair, skylight replacement, or major siding work.",
          },
        },
      },

      "pipe-boot-repair": {
        label: "Pipe boot or roof vent repair",
        sizes: {
          small: {
            low: 200,
            high: 500,
            laborShare: 0.72,
            time: "1–3 hours",
            recommendation:
              "A roofer is usually worth it because pipe boots are a common leak source and must seal correctly.",
            note: "Simple boot replacement is cheaper when shingles around the pipe are still in good condition.",
          },
          medium: {
            low: 500,
            high: 1200,
            laborShare: 0.74,
            time: "Half day",
            recommendation:
              "Use a professional when multiple vents are aging or nearby shingles are damaged.",
            note: "Multiple penetrations or brittle shingles can increase labor and material cost.",
          },
          large: {
            low: 1200,
            high: 2600,
            laborShare: 0.75,
            time: "1 day",
            recommendation:
              "A professional is recommended for multiple vent repairs, steep roofs, or repeated leak issues.",
            note: "This estimate does not include attic mold cleanup or interior ceiling repair.",
          },
        },
      },

      "emergency-tarping": {
        label: "Emergency roof tarping",
        sizes: {
          small: {
            low: 250,
            high: 700,
            laborShare: 0.76,
            time: "1–3 hours",
            recommendation:
              "Do not DIY emergency tarping during storms, high wind, darkness, or unsafe roof conditions.",
            note: "Emergency pricing rises after storms, at night, or when roof access is dangerous.",
          },
          medium: {
            low: 700,
            high: 2000,
            laborShare: 0.78,
            time: "Half day",
            recommendation:
              "Use a professional when the tarp area is large or the roof is wet, steep, or storm-damaged.",
            note: "Tarping is temporary and does not fix the underlying roof damage.",
          },
          large: {
            low: 2000,
            high: 6000,
            laborShare: 0.8,
            time: "Half day to 1 day",
            recommendation:
              "A professional emergency roofing crew is recommended for large storm openings or unsafe access.",
            note: "This range does not include permanent repair, structural work, or insurance claim handling.",
          },
        },
      },
    },
  },
};
