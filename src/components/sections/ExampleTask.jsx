import './Section.css'

function ExampleTask() {
  return (
    <div className="section">
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Example Task</h2>
          <p>
            This page demonstrates a complete example evaluation task, showing the task prompt, 
            two AI-generated responses, strengths and weaknesses analysis, and rating interfaces.
          </p>
        </div>

        <div className="card">
          <h3 className="subsection-title">Task Prompt</h3>
          <div style={{ 
            backgroundColor: '#f5f5f5', 
            borderLeft: '4px solid #2563eb', 
            padding: '1rem', 
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '0.95rem'
          }}>
            <div style={{ color: '#2563eb', marginBottom: '0.5rem', fontWeight: '600' }}>User</div>
            <div style={{ color: '#666', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
              &lt;uploaded_files&gt;<br />
              /tmp/inputs/8.zip<br />
              &lt;/uploaded_files&gt;
            </div>
            <div style={{ color: '#1a1a1a', lineHeight: '1.6' }}>
              Replace calls to the removed method <code style={{ backgroundColor: '#fff', padding: '0.2rem 0.4rem', borderRadius: '3px' }}>proc_macro2::Span::call_site().source_file()</code> with <code style={{ backgroundColor: '#fff', padding: '0.2rem 0.4rem', borderRadius: '3px' }}>proc_macro2::Span::call_site().file()</code> in <code style={{ backgroundColor: '#fff', padding: '0.2rem 0.4rem', borderRadius: '3px' }}>anchor-syn/src/idl/defined.rs</code>. Ensure compatibility across toolchains by handling the versioning mismatch between Anchor, proc-macro2, and Rust nightly API changes.
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="subsection-title">Response Comparison & Detailed Weaknesses Analysis</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem', backgroundColor: '#fafafa' }}>
              <h4 style={{ color: '#2563eb', marginTop: 0, marginBottom: '1rem' }}>Response A</h4>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#059669', display: 'block', marginBottom: '0.5rem' }}>Strengths:</strong>
                <ul className="bullet-list" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  <li>Identifies multiple legitimate optimization opportunities beyond just the API change</li>
                  <li>The <code>Ok(Ok(...))</code> to <code>.ok().and_then()</code> transformation is genuinely more idiomatic</li>
                  <li>Caching <code>last_segment</code> to avoid repeated <code>.last()</code> calls is a real improvement</li>
                  <li>Changing <code>find().is_none()</code> to <code>!any()</code> is cleaner and avoids unnecessary string allocations</li>
                  <li>The zip vs index-based access change prevents potential panics</li>
                  <li>Good documentation in <code>compatibility_solution.md</code> explaining each change</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#dc2626', display: 'block', marginBottom: '0.5rem' }}>Weaknesses Verification:</strong>
                <p style={{ fontSize: '0.9rem', margin: 0, color: '#666' }}>
                  Doesn't compile or test the code, just edits the files and calls it done. Rust has strict type checking, so these changes could have easily caused compile errors.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
                <strong style={{ color: '#dc2626', display: 'block', marginBottom: '0.5rem' }}>Root Cause:</strong>
                <ul className="bullet-list" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  <li>Some changes are debatable: The loop-based replacement vs changed <code>.replace()</code> calls is not actually more efficient. It's the same number of allocations. The comment "batch string replacements" is misleading.</li>
                  <li>Replacing <code>unimplemented!()</code> with silent <code>filter_map</code> skipping changes behavior - the original code explicitly wanted to fail on unsupported types so developers would know how to handle them. Silently skipping could hide bugs.</li>
                  <li>The <code>&*alias.ty</code> to <code>&alias.ty</code> change, while cleaner, calling this an "optimization" is a stretch.</li>
                </ul>
              </div>

              <div>
                <strong style={{ color: '#dc2626', display: 'block', marginBottom: '0.5rem' }}>Instruction Following:</strong>
                <p style={{ fontSize: '0.9rem', margin: 0, color: '#666' }}>
                  Replacing panics with silent skips fundamentally changes the error handling contract. The original code would crash loudly on unsupported generic arguments; the new code silently ignores them. This might not be what maintainers want.
                </p>
              </div>
            </div>

            <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem', backgroundColor: '#fafafa' }}>
              <h4 style={{ color: '#2563eb', marginTop: 0, marginBottom: '1rem' }}>Response B</h4>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#059669', display: 'block', marginBottom: '0.5rem' }}>Strengths:</strong>
                <ul className="bullet-list" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  <li>Makes similar optimizations to A—the <code>and_then</code> chaining, caching <code>last_segment</code>, zip instead of index access, and the <code>any()</code> short-circuit</li>
                  <li>Has one genuinely better idea than A: adds <code>if inners.len() == args.args.len()</code> check before proceeding, which ensures all arguments were successfully processed</li>
                  <li>This preserves the original contract—if we encounter an unsupported type, we bail out rather than silently skipping it</li>
                  <li>The variable rename from <code>is_external</code> to <code>is_defined_locally</code> with negation is clearer semantically</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#dc2626', display: 'block', marginBottom: '0.5rem' }}>Weaknesses Verification:</strong>
                <p style={{ fontSize: '0.9rem', margin: 0, color: '#666' }}>
                  Same as A. Doesn't compile or test the code. Proc-macro code is especially tricky; these changes could easily break.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
                <strong style={{ color: '#dc2626', display: 'block', marginBottom: '0.5rem' }}>Root Cause:</strong>
                <p style={{ fontSize: '0.9rem', margin: 0, color: '#666', marginBottom: '0.75rem' }}>
                  The <code>any(|s| s.ident == name)</code> change compares an <code>Ident</code> to a <code>String</code>. This probably won't compile—<code>Ident</code> doesn't implement <code>PartialEq&lt;String&gt;</code> directly. You'd need <code>s.ident == name</code> or <code>s.ident == name.as_str()</code> or similar. A shows similar issue but uses <code>&s.ident</code> which has the same problem.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#dc2626', display: 'block', marginBottom: '0.5rem' }}>Instruction Following:</strong>
                <p style={{ fontSize: '0.9rem', margin: 0, color: '#666' }}>
                  Even with the length check, using <code>filter_map</code> still changes behavior. Original code would panic with a clear error message about which type wasn't supported; new code silently falls through to the non-generic alias path. The length check helps but doesn't fully preserve the debugging experience.
                </p>
              </div>

              <div>
                <strong style={{ color: '#dc2626', display: 'block', marginBottom: '0.5rem' }}>Other weaknesses:</strong>
                <p style={{ fontSize: '0.9rem', margin: 0, color: '#999', fontStyle: 'italic' }}>
                  (None specified)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="subsection-title">Side-by-Side Ratings (8-choice)</h3>
          
          <div style={{ marginTop: '1rem' }}>
            {[
              { title: 'Overall', selected: 6 },
              { title: 'Logic & correctness', selected: 6 },
              { title: 'Naming & clarity', selected: 5 },
              { title: 'Organization & modularity', selected: 5 },
              { title: 'Error handling & robustness', selected: 6 },
              { title: 'Comments & documentation', selected: 4 },
              { title: 'Ready for review/merge', selected: 5 },
              { title: 'Honesty', selected: 4 },
              { title: 'Instruction following', selected: 5 }
            ].map((category, idx, arr) => (
              <div key={idx} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: idx < arr.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', alignItems: 'center' }}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600', color: '#1a1a1a' }}>{category.title}</h4>
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>Selected: {category.selected}/8</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#666' }}>
                  <span>A much better</span>
                  <span>B much better</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
                    const isSelected = category.selected === num;
                    const isA = num <= 4;
                    return (
                      <button
                        key={num}
                        style={{
                          flex: 1,
                          padding: '0.75rem 0.5rem',
                          border: isSelected ? '2px solid #2563eb' : '1px solid #d0d0d0',
                          borderRadius: '6px',
                          backgroundColor: isSelected ? '#eff6ff' : 'white',
                          color: isSelected ? '#2563eb' : '#999',
                          fontWeight: isSelected ? '600' : '400',
                          cursor: 'default',
                          fontSize: '0.9rem'
                        }}
                        disabled
                      >
                        {isA ? 'A' : 'B'}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExampleTask
