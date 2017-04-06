<template lang="html">
  <div class="create-post">
    <md-card class="card-example">
      <md-card-area md-inset>
        <!-- <md-card-media md-ratio="16:9">
          <img src="assets/card-example.jpg" alt="Coffee House">
        </md-card-media> -->

        <md-card-header>
          <md-input-container>
            <label>Job Title</label>
            <md-input v-model="jobTitle"></md-input>
          </md-input-container>
          <div class="md-subhead">
            <md-input-container>
              <label>Job Description</label>
              <md-input v-model="jobDescription"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Location</label>
              <md-input v-model="jobLocation"></md-input>
            </md-input-container>
          </div>
        </md-card-header>
      </md-card-area>
    </md-card>

    <!-- <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
      <md-dialog-title>Create new note</md-dialog-title>

      <md-dialog-content>
        <form>
          <md-input-container>
            <label>Note</label>
            <md-textarea></md-textarea>
          </md-input-container>
        </form>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
        <md-button class="md-primary" @click.native="closeDialog('dialog2')">Create</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-fab md-fab-bottom-right" id="fab" @click.native="openDialog('dialog2')">
      <md-icon>add</md-icon>
    </md-button> -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.card-example {
  .md-subhead {
    .md-icon {
      $size: 16px;

      width: $size;
      min-width: $size;
      height: $size;
      min-height: $size;
      font-size: $size;
      line-height: $size;
    }

    span {
      vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .md-icon {
      margin: 8px;
      color: rgba(#000, .54) !important;
    }

    .md-button {
      border-radius: 2px !important;
    }
  }
}
</style>
