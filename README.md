# Intake Pipeline Design

**How do you pull dates, dollars and terms out of a pile of mixed contracts, privately, on one graphics card, and still show where every answer came from?**

A system design brief by **Tayler Erbe**, Document Intelligence Lab. It describes a document intake pipeline built as a working prototype: how it is organized, how its AI models are configured and swapped, and the rules that keep its output honest.

**Read the brief:** [tayler-erbe.github.io/intake-pipeline-lab-public/brief/](https://tayler-erbe.github.io/intake-pipeline-lab-public/brief/)

## The idea in four lines

- **An assembly line, not a chatbot.** Documents are split into pieces: typed text, scans, tables, charts and highlighted passages. Each step handles only its own kind of piece, across the whole batch.
- **The right model for each job.** Tables, scanned pages, charts and contract clauses each go to the local model that tested best for that task in a [public model evaluation](https://github.com/tayler-erbe/test-ocr-work).
- **Swap by configuration.** Each step is one entry in a settings file. Changing a model is a one-line change, and earlier results are kept so old and new can be compared.
- **Show your work.** The AI points to where an answer is; code copies the exact words from the page. A person reviews every AI-proposed value before it counts.

## Where it stands

The pipeline is built and tested end to end on fictional documents, with placeholder models standing in for real ones. **No accuracy is claimed.** The next step is a labelled pilot: reviewers check 100 to 300 real documents, and accuracy is reported field by field.

## What is and isn't here

| Here | Not here |
|---|---|
| The design brief (`brief/`) | Pipeline source code (kept private) |
| Stage list, configuration format, design rules | Any real documents, extracted values or results |

## Related work

- [Document intelligence evaluation](https://tayler-erbe.github.io/tayler-portfolio/document-intelligence-evaluation.html): which local model should read which part of a document.
- [Local document intelligence evaluation on GitHub](https://github.com/tayler-erbe/test-ocr-work): methods, results and the implementation roadmap.
- [Portfolio](https://taylererbe.com/)

## View it locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000/brief/.
