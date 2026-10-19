import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const send = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    message: v.string(),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("leads", {
      name: args.name,
      phone: args.phone,
      email: args.email,
      message: args.message,
      source: args.source ?? "website",
      createdAt: Date.now(),
    });
    return { ok: true };
  },
});
